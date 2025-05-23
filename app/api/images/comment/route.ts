import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { imageId, content } = await req.json();

  if (!imageId || !content)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const comment = await prisma.comment.create({
    data: {
      userId: user.id,
      imageId,
      content,
    },
    include: {
      user: { select: { username: true } },
    },
  });

  return NextResponse.json({ comment });
}

export async function GET(req: Request) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const imageId = searchParams.get("imageId");

  if (!imageId) {
    return NextResponse.json({ error: "Missing imageId" }, { status: 400 });
  }

  const comments = await prisma.comment.findMany({
    where: { imageId },
    include: {
      user: {
        select: { username: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const formatted = comments.map((comment) => ({
    id: comment.id,
    content: comment.content,
    user: {
      username: comment.user.username,
    },
  }));

  return NextResponse.json(formatted);
}
