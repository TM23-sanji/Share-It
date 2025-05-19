import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { imageId } = await req.json();
  if (!imageId) return NextResponse.json({ error: "Missing imageId" }, { status: 400 });

  const existing = await prisma.favorite.findUnique({
    where: {
      userId_imageId: {
        userId: user.id,
        imageId,
      },
    },
  });

  if (existing) {
    // Remove favorite (toggle off)
    await prisma.favorite.delete({
      where: { id: existing.id },
    });
    return NextResponse.json({ favorited: false });
  } else {
    // Add favorite
    await prisma.favorite.create({
      data: {
        userId: user.id,
        imageId,
      },
    });
    return NextResponse.json({ favorited: true });
  }
}
