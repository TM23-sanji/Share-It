"use client"; // This component must be a client component

import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import ImageGallery from "@/components/image-gallery";
import UploadModal from "@/components/upload-modal";
import { toast } from "sonner";
import { upload } from "@imagekit/next";
import { Loader } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Image {
  src: string;
  alt: string;
  fileId: string;
  fileWidth: number;
  fileHeight: number;
}

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<Image[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const resImage = await fetch("/api/list-images");
      const imageData = await resImage.json();
      setImages(imageData);
    } catch (err) {
      console.error("Failed to load images", err);
      toast.error("Failed to load images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUploadClick = () => {
    setIsUploadModalOpen(true);
  };

  const handleUpload = async (file: File) => {
    try {
      const res = await fetch("/api/upload-auth");
      const { token, expire, signature, publicKey } = await res.json();
      const isImage = file.type.startsWith("image/");
      if (isImage) {
        const uploadResponse = await upload({
          file,
          fileName: file.name,
          token,
          publicKey,
          signature,
          expire,
          folder: `uploads/image`,
          useUniqueFileName: true,
        });

        const uploadedFile = {
          src: uploadResponse.url || URL.createObjectURL(file),
          alt: isImage ? uploadResponse.name : file.name,
          fileId: uploadResponse.fileId!,
          fileWidth: uploadResponse.width!,
          fileHeight: uploadResponse.height!,
        };

        setImages([{ ...uploadedFile, alt: file.name } as Image, ...images]);
        toast.success("Image uploaded successfully");
      } else {
        toast.error("Image Only");
      }
    } catch (error) {
      console.error("Upload failed", error);
      toast.error("Upload failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onUploadClick={handleUploadClick} />

      <main className="flex-1 flex flex-col">
        {loading ? (
          <div className="flex flex-col items-center justify-center text-gray-500 h-64">
            <Loader className="animate-spin w-6 h-6 mb-2" />
            <p>Loading...</p>
          </div>
        ) : images.length > 0 ? (
          <div>
            <ScrollArea className="h-[calc(100vh-80px)] pb-6">
              <ImageGallery
                images={images}
                setImages={setImages}
                fetchFiles={fetchFiles}
              />
            </ScrollArea>
          </div>
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
