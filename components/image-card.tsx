import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Heart,
  MessageSquare,
  Trash,
  Download,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { Image as ImageType } from "@/app/page";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  fileId: string;
  fileWidth: number;
  fileHeight: number;
  onClick?: () => void;
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
  fetchFiles: () => void;
}

const ImageCard = ({
  src,
  alt,
  fileId,
  fileWidth,
  fileHeight,
  onClick,
  setImages,
  fetchFiles,
}: ImageCardProps) => {
  const [liked, setLiked] = useState(false);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  const handleDownvote = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (userVote !== "down") {
      setUserVote("down");
      toast("Downvoted");
    } else {
      setUserVote(null); // Reset to neutral
    }
  };

  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (userVote !== "up") {
      setUserVote("up");
      toast.success("Upvoted!");
    } else {
      setUserVote(null); // Reset to neutral
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    toast.success(liked ? "Removed from favorites" : "Added to favorites");
  };

  const handleComment = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.info("Comment feature coming soon!");
  };

  const handleDownload = async (
    e: React.MouseEvent,
    url: string,
    filename: string
  ) => {
    e.stopPropagation();
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename || "image";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
      toast.success("Image downloaded successfully");
    } catch (error) {
      console.error("Error downloading image:", error);
      toast.error("Failed to download image");
    }
  };

  const handleDelete = async (e: React.MouseEvent, fileId: string) => {
    e.stopPropagation();
    try {
      const res = await fetch("/api/delete-image", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileId }),
      });

      if (!res.ok) throw new Error("Failed to delete");

      setImages(
        (prev: ImageType[]) =>
          prev?.filter((img: ImageType) => img.fileId !== fileId) || []
      );
      toast.success("Image deleted successfully");
      fetchFiles();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete image");
      fetchFiles();
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer bg-white flex flex-col"
      onClick={onClick}
    >
      <AspectRatio ratio={fileWidth / fileHeight}>
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
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
              className={cn("h-5 w-5", liked ? "fill-red-500 text-black" : "")}
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

          {/* <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleShare}
          >
            <Share className="h-5 w-5" />
          </Button>
 */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleUpvote}
          >
            <ThumbsUp
              className={cn(
                "h-4 w-4",
                userVote === "up" ? "fill-green-500 text-black" : ""
              )}
            />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleDownvote}
          >
            <ThumbsDown
              className={cn(
                "h-4 w-4",
                userVote === "down" ? "fill-red-500 text-black" : ""
              )}
            />
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <div
            onClick={(e) => {
              handleDownload(e, src, alt);
            }}
            className="pr-5"
          >
            <Download className="h-4 w-4" />
          </div>

          <div
            onClick={(e) => {
              handleDelete(e, fileId);
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

export default ImageCard;
