import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// export async function POST() {
//   try {
//     const clerkUser = await currentUser();
//     if (!clerkUser) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }
    
//     if (!clerkUser || !clerkUser.username || !clerkUser.emailAddresses.length) {
//       return NextResponse.json({ error: "Invalid Clerk user" }, { status: 400 });
//     }

//     const existingUser = await prisma.user.findUnique({
//       where: { id: clerkUser.id },
//     });

//     if (existingUser) {
//       return NextResponse.json({ message: "User already exists" }, { status: 200 });
//     }

//     await prisma.user.create({
//       data: {
//         id: clerkUser.id,
//         username: clerkUser.username!,
//         email: clerkUser.primaryEmailAddress?.emailAddress!,
//       },
//     });

//     return NextResponse.json({ message: "User created" }, { status: 200 });
//   } catch (error) {
//     // Enhanced error logging
//     console.error("Error creating user:", error instanceof Error ? error.stack : error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }

export async function POST() {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const username = clerkUser.username;
    const email = clerkUser.primaryEmailAddress?.emailAddress;

    if (!username || !email) {
      return NextResponse.json({ error: "Invalid Clerk user" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: clerkUser.id },
    });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 200 });
    }

    await prisma.user.create({
      data: {
        id: clerkUser.id,
        username,
        email,
      },
    });

    return NextResponse.json({ message: "User created" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error creating user:", error instanceof Error ? error.stack : error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
