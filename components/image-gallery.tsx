import React from "react";
import ImageCard from "./image-card";
import type { Image as ImageType } from "@/app/page";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    fileId: string;
    fileWidth: number;
    fileHeight: number;
  }>;
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
  fetchFiles:()=>void;
}

const ImageGallery = ({ images, setImages, fetchFiles }: ImageGalleryProps) => {
  return (
<div className="w-full p-6">
  <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
    {images.map((image) => (
      <div key={image.fileId} className="break-inside-avoid">
        <ImageCard
          src={image.src}
          alt={image.alt}
          fileId={image.fileId}
          fileWidth={image.fileWidth}
          fileHeight={image.fileHeight}
          setImages={setImages}
          fetchFiles={fetchFiles}
        />
      </div>
    ))}
  </div>
</div>
  );
};

export default ImageGallery;
