import { NextResponse } from "next/server";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function GET() {

  try {
    const files = await imagekit.listFiles({
      path: "uploads/image",
  });
    const images = files
      .filter(file => 'url' in file) // Ensure file has a 'url' property
      .map(file => ({
        src: file.url,
        alt: file.name,
        fileId: file.fileId,
      }));
    return NextResponse.json(images);
  } catch (error) {
    console.error("ImageKit error:", error);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}