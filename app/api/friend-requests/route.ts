// /app/api/friend-requests/route.ts

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}


export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const requests = await prisma.friendRequest.findMany({
    where: {
      toId: user.id,
    },
    include: {
      from: true,
    },
  });

  const formatted = requests.map(req => ({
    id: req.from.id,
    name: req.from.username,
    email: req.from.email,
  }));

  return NextResponse.json(formatted);
}

export async function POST(request: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { username } = await request.json();
  if (!username) return NextResponse.json({ error: "Missing username" }, { status: 400 });

  try {
    const recipient = await prisma.user.findUnique({ where: { username } });

    if (!recipient) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (recipient.id === user.id) {
      return NextResponse.json({ error: "Cannot send request to yourself" }, { status: 400 });
    }

    const alreadyRequested = await prisma.friendRequest.findFirst({
      where: {
        fromId: user.id,
        toId: recipient.id,
      },
    });

    if (alreadyRequested) {
      return NextResponse.json({ message: "Friend request already sent" }, { status: 200 });
    }

    const existingRequest = await prisma.friendRequest.findFirst({
      where: {
        OR: [
          { fromId: user.id, toId:recipient.id },
          { fromId: recipient.id, toId: user.id },
        ],
      },
    });

    if (existingRequest) {
      return NextResponse.json({ message: "Friend request already exists" }, { status: 200 });
    }


    const alreadyFriends = await prisma.friendship.findFirst({
      where: {
        OR: [
          { user1Id: user.id, user2Id: recipient.id },
          { user1Id: recipient.id, user2Id: user.id },
        ],
      },
    });
    if (alreadyFriends) {
      return NextResponse.json({ message: "Already friends" }, { status: 200 });
    }

    await prisma.friendRequest.create({
      data: {
        fromId: user.id,
        toId: recipient.id,
      },
    });

    return NextResponse.json({ message: "Friend request sent!" }, { status: 201 });
  } catch (error) {
    console.error("Error creating friend request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
