import { NextResponse } from "next/server";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function DELETE(request: Request) {
  const { fileId } = await request.json();
  try {
    const response = await imagekit.deleteFile(fileId);
    return NextResponse.json(response);
  } catch (error) {
    console.error("ImageKit error:", error);
    return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
  }
}
