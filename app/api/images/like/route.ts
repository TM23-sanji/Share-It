// POST /api/images/like
// body: { imageId: string, action: "like" | "dislike" }

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { imageId, action } = await req.json();

  if (!imageId || !["like", "dislike"].includes(action))
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const existingLike = await prisma.like.findUnique({
    where: { userId_imageId: { userId: user.id, imageId } },
  });

  const existingDislike = await prisma.dislike.findUnique({
    where: { userId_imageId: { userId: user.id, imageId } },
  });

  if (action === "like") {
    // remove dislike if present
    if (existingDislike) {
      await prisma.dislike.delete({ where: { id: existingDislike.id } });
      await prisma.image.update({ where: { id: imageId }, data: { dislikes: { decrement: 1 } } });
    }
    // add like if not already
    if (!existingLike) {
      await prisma.like.create({ data: { userId: user.id, imageId } });
      await prisma.image.update({ where: { id: imageId }, data: { likes: { increment: 1 } } });
    }
  }

  if (action === "dislike") {
    if (existingLike) {
      await prisma.like.delete({ where: { id: existingLike.id } });
      await prisma.image.update({ where: { id: imageId }, data: { likes: { decrement: 1 } } });
    }
    if (!existingDislike) {
      await prisma.dislike.create({ data: { userId: user.id, imageId } });
      await prisma.image.update({ where: { id: imageId }, data: { dislikes: { increment: 1 } } });
    }
  }

  return NextResponse.json({ success: true });
}
