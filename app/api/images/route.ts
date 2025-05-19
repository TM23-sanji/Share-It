import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import ImageKit from "imagekit";

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { url, fileId, fileWidth, fileHeight, alt } = body;

  if (!url || !fileId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const image = await prisma.image.create({
    data: {
      url,
      fileId,
      fileWidth,
      fileHeight,
      alt: alt || "Image",
      uploadedById: user.id,
    },
  });

  return NextResponse.json({ image }, { status: 201 });
}

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const friendships = await prisma.friendship.findMany({
    where: {
      OR: [{ user1Id: user.id }, { user2Id: user.id }],
    },
  });

  const friendIds = friendships.map((f) =>
    f.user1Id === user.id ? f.user2Id : f.user1Id
  );

  const imageUsers = [user.id, ...friendIds];

  const images = await prisma.image.findMany({
    where: {
      uploadedById: {
        in: imageUsers,
      },
    },
    include: {
      uploadedBy: {
        select: {
          username: true,
        },
      },
      comments: {
        select: {
          id: true,
          content: true,
          user: {
            select: { username: true },
          },
        },
        orderBy: { createdAt: "desc" },
      },
      favorites: true,
      likedBy: {
        select: { userId: true },
      },
      dislikedBy: {
        select: { userId: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // 🛠️ Transform the Prisma objects into frontend-friendly shape
  const response = images.map((img) => ({
    id: img.id,
    src: img.url,
    alt: img.alt,
    fileId: img.fileId,
    fileWidth: img.fileWidth,
    fileHeight: img.fileHeight,
    likes: img.likes,
    dislikes: img.dislikes,
    isLiked: img.likedBy.some((l) => l.userId === user.id),
    isDisliked: img.dislikedBy.some((d) => d.userId === user.id),
    commentCount: img.comments.length,
    favoriteCount: img.favorites.length,
    uploadedByUsername: img.uploadedBy.username,
    isFavorited: img.favorites.some((f) => f.userId === user.id),
    comments: img.comments.map((comment) => ({
    id: comment.id,
    content: comment.content,
    user: {
      username: comment.user.username,
    },
  }))
  }));

  return NextResponse.json(response);
}

export async function DELETE(req: Request) {
  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
  });

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { imageId } = await req.json();
  if (!imageId) {
    return NextResponse.json({ error: "Missing imageId" }, { status: 400 });
  }

  const image = await prisma.image.findUnique({
    where: { id: imageId },
  });

  if (!image || image.uploadedById !== user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await imagekit.deleteFile(image.fileId);

  // Optional: Clean up likes, dislikes, favorites, comments before deleting image
  await prisma.comment.deleteMany({ where: { imageId } });
  await prisma.favorite.deleteMany({ where: { imageId } });
  await prisma.like.deleteMany({ where: { imageId } });
  await prisma.dislike.deleteMany({ where: { imageId } });

  await prisma.image.delete({
    where: { id: imageId },
  });

  return NextResponse.json({ message: "Image deleted" });
}
