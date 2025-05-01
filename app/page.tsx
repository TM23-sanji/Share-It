"use client"; // This component must be a client component

import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import ImageGallery from "@/components/image-gallery";
import UploadModal from "@/components/upload-modal";
import { toast } from "sonner";
import { upload } from "@imagekit/next";

export interface Image {
  src: string;
  alt: string;
  fileId: string;
}

const Index = () => {
  const [images, setImages] = useState<Image[] >([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/list-images");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Failed to load images", err);
        toast.error("Failed to load images");
      }
    };

    fetchImages();
  }, []);

  const handleUploadClick = () => {
    setIsUploadModalOpen(true);
  };

  const handleUpload = async (file: File) => {
    // In a real application, you would upload the file to a server
    // For now, we'll just create a new image object with a local URL
    const res = await fetch("/api/upload-auth");
    const { token, expire, signature, publicKey } = await res.json();
    const fileType = file.type.startsWith("video/") ? "video" : "image";
    const uploadResponse = await upload({
      file,
      fileName: file.name,
      token,
      publicKey,
      signature,
      expire,
      folder: `uploads/${fileType}`,
      useUniqueFileName: true,
    });

    const newImage = {
      src: uploadResponse.url || URL.createObjectURL(file),
      alt: file.name,
      fileId: uploadResponse.fileId!,
    };

    setImages([newImage, ...images]);
    toast.success("Image uploaded successfully");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onUploadClick={handleUploadClick} />

      <main className="flex-1 flex flex-col">
  {images && images.length > 0 ? (
    <ImageGallery images={images} setImages={setImages} />
  ) : (
    <div className="flex flex-col items-center justify-center text-gray-500 h-64">
      <p className="font-semibold">Nothing to show here yet.</p>
      <button
        onClick={handleUploadClick}
        className="mt-2 text-blue-500 hover:underline"
      >
        Upload your first image
      </button>
    </div>
  )}
</main>


      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  );
};

export default Index;
