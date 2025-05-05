import React from "react";
import ImageCard from "./image-card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    fileId: string;
    fileWidth: number;
    fileHeight: number;
  }>;
  setImages: React.Dispatch<React.SetStateAction<any>>;
  fetchFiles: ()=>void;
}

const ImageGallery = ({ images, setImages, fetchFiles }: ImageGalleryProps) => {
  return (
    <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {images.map((image) => (
            <div key={image.fileId}>
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
