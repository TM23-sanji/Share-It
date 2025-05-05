"use client"; // This component must be a client component

import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import ImageGallery from "@/components/image-gallery";
import VideoGallery from "@/components/video-gallery";
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

export interface Video {
  src: string;
  alt: string;
  fileId: string;
  fileWidth: number;
  fileHeight: number;
  size: number;
  thumbnail: string;
}

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<Image[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const resImage = await fetch("/api/list-images");
      const imageData = await resImage.json();
      const resVideo = await fetch("/api/list-videos");
      const videoData = await resVideo.json();
      setImages(imageData);
      setVideos(videoData);
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
      // In a real application, you would upload the file to a server
      // For now, we'll just create a new image object with a local URL
      const res = await fetch("/api/upload-auth");
      const { token, expire, signature, publicKey } = await res.json();
      const isVideo = file.type.startsWith("video/");
      const fileType = isVideo ? "video" : "image";
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

      const uploadedFile = {
        src: uploadResponse.url || URL.createObjectURL(file),
        alt: isVideo ? uploadResponse.name : file.name,
        fileId: uploadResponse.fileId!,
        fileWidth: uploadResponse.width!,
        fileHeight: uploadResponse.height!,
        size: file.size,
        thumbnail: isVideo ? uploadResponse.thumbnailUrl || "" : "",
      };

      if (isVideo) {
        setVideos([uploadedFile as Video,...videos]);
        toast.success("Video uploaded successfully");
      } else {
        setImages([{ ...uploadedFile, alt: file.name } as Image, ...images]);
        toast.success("Image uploaded successfully");
      }

    } catch (err) {
      console.error("Upload failed", err);
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
        ) : images.length > 0 || videos.length > 0 ? (
          <div >
            <ScrollArea className="h-[calc(100vh-80px)] pb-6">
            {images.length > 0 && (
              <ImageGallery images={images} setImages={setImages} fetchFiles={fetchFiles} />
            )}
            {videos.length > 0 && (
              <VideoGallery videos={videos} setVideos={setVideos} fetchFiles={fetchFiles} />
            )}
            </ScrollArea>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 h-64">
            <p className="font-semibold">Nothing to show here yet.</p>
            <button
              onClick={handleUploadClick}
              className="mt-2 text-blue-500 hover:underline"
            >
              Upload your first file
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
