import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const friendships = await prisma.friendship.findMany({
    where: {
      OR: [
        { user1Id: user.id },
        { user2Id: user.id },
      ],
    },
    include: {
      user1: true,
      user2: true,
    },
  });

  const friends = friendships.map(f => {
    const friend = f.user1.id === user.id ? f.user2 : f.user1;
    return {
      id: friend.id,
      name: friend.username,
      isOnline: Math.random() > 0.5, // ← Replace with real presence logic if needed
    };
  });

  return NextResponse.json(friends);
}

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { username } = await req.json();
  if (!username) {
    return NextResponse.json({ error: "Missing username" }, { status: 400 });
  }

  // Find the user who sent the request
  const fromUser = await prisma.user.findUnique({ where: { username } });
  if (!fromUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Check if request exists
  const request = await prisma.friendRequest.findFirst({
    where: {
      fromId: fromUser.id,
      toId: user.id,
    },
  });

  if (!request) {
    return NextResponse.json({ error: "No friend request from this user" }, { status: 404 });
  }

  // Sort user IDs for consistent friendship structure
  const [user1Id, user2Id] = [user.id, fromUser.id].sort();

  // Create friendship
  await prisma.friendship.create({
    data: {
      user1Id,
      user2Id,
    },
  });

  // Delete request
  await prisma.friendRequest.delete({
    where: { id: request.id },
  });

  return NextResponse.json({ message: "Friend request accepted" }, { status: 200 });
}


export async function DELETE(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { username } = await req.json();
  if (!username) {
    return NextResponse.json({ error: "Missing username" }, { status: 400 });
  }

  // Find friend user
  const friend = await prisma.user.findUnique({
    where: { username },
  });

  if (!friend) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Determine user1Id and user2Id (always sorted)
  const [user1Id, user2Id] = [user.id, friend.id].sort();

  // Delete friendship if exists
  const deleted = await prisma.friendship.deleteMany({
    where: {
      user1Id,
      user2Id,
    },
  });

  if (deleted.count === 0) {
    return NextResponse.json({ error: "Friendship not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Friend removed" });
}
