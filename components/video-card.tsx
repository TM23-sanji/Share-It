import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Heart,
  MessageSquare,
  Share,
  Trash,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { Video as VideoType } from "@/app/page";

interface VideoCardProps {
  src: string;
  alt:string
  fileId: string;
  fileWidth: number;
  fileHeight: number;
  size: number,
  thumbnail: string,
  onClick?: () => void; 
  setVideos: React.Dispatch<React.SetStateAction<any>>;
  fetchFiles: ()=>void;
}

const VideoCard = ({
  src,
  alt,
  size,
  thumbnail,
  fileId,
  fileWidth,
  fileHeight,
  onClick,
  setVideos,
  fetchFiles
}: VideoCardProps) => {
  const [liked, setLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    toast.success(liked ? "Removed from favorites" : "Added to favorites");
  };

  const handleComment = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.info("Comment feature coming soon!");
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.info("Share feature coming soon!");
  };

  const handleDownload = async (e: React.MouseEvent, url: string, filename: string ) => {
    e.stopPropagation();
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename || "video";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
      toast.success("Video downloaded successfully");
    } catch (error) {
      console.error("Error downloading video:", error);
      toast.error("Failed to download video"); 
    }
  }

  const handleDelete = async (e:React.MouseEvent,fileId: string) => {
    e.stopPropagation();
    try {
      const res = await fetch("/api/delete-image", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileId }),
      });

      if (!res.ok) throw new Error("Failed to delete");

      setVideos(
        (prev: VideoType[]) =>
          prev?.filter((vid: VideoType) => vid.fileId !== fileId) || []
      );
      toast.success("Video deleted successfully");
      fetchFiles();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete video");
      fetchFiles()
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer bg-white flex flex-col"
      onClick={onClick}
    >
      
      <AspectRatio ratio={fileWidth / fileHeight}>
        <video src={src} controls muted className="object-cover w-full h-full" />
      </AspectRatio>

      <div className="p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleLike}
          >
            <Heart
              className={cn(
                "h-5 w-5",
                liked ? "fill-red-500 text-red-500" : ""
              )}
            />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleComment}
          >
            <MessageSquare className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleShare}
          >
            <Share className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <div onClick={(e) => {
            handleDownload(e,src,alt);
          }} className="pr-5">
            <Download className="h-4 w-4" />
          </div>

          <div
            onClick={(e) => {
              handleDelete(e,fileId);
            }}
            className="pr-3"
          >
            <Trash className="h-4 w-4" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoCard;
