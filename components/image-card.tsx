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
import CommentList from "@/components/commentList";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
// import type { Image as ImageType } from "@/app/page";
import { ImageType } from "@/lib/types";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ImageCardProps extends ImageType {
  onClick?: () => void;
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
  fetchFiles: () => void;
}

const ImageCard = ({
  id,
  src,
  alt,
  fileWidth,
  fileHeight,
  onClick,
  fetchFiles,
  uploadedByUsername,
  isLiked,
  isDisliked,
  isFavorited,
  comments
}: ImageCardProps) => {
  const [favourite, setFavourite] = useState(isFavorited);
  const [liked, setLiked] = useState<boolean>(isLiked);
  const [disliked, setDisliked] = useState<boolean>(isDisliked);
  const [showComments, setShowComments] = useState(false);
  // const allComments = [
  //   {
  //     id: "comment-1",
  //     user: {
  //       name: "Sarah Johnson",
  //       username: "sarahj",
  //       avatar: "https://i.pravatar.cc/150?img=1",
  //     },
  //     content:
  //       "This is a great post! I've been looking for information like this for a while.",
  //     timestamp: "2023-05-14T10:23:00.000Z",
  //     likes: 12,
  //     replies: 2,
  //     isLiked: false,
  //   },
  //   {
  //     id: "comment-2",
  //     user: {
  //       name: "Mike Thompson",
  //       username: "miket",
  //       avatar: "https://i.pravatar.cc/150?img=2",
  //     },
  //     content: "Thanks for sharing! I learned a lot from this.",
  //     timestamp: "2023-05-14T11:45:00.000Z",
  //     likes: 8,
  //     replies: 0,
  //     isLiked: true,
  //   },
  //   {
  //     id: "comment-3",
  //     user: {
  //       name: "Alex Rodriguez",
  //       username: "alexr",
  //       avatar: "https://i.pravatar.cc/150?img=3",
  //     },
  //     content:
  //       "I have a question about the third point. Could you elaborate more on that?",
  //     timestamp: "2023-05-14T12:30:00.000Z",
  //     likes: 4,
  //     replies: 1,
  //     isLiked: false,
  //   },
  // ];
  const allComments = comments;
  
  const handleDislike = async () => {
    try {
      setDisliked(true);
      setLiked(false);
      if (!disliked) {
        await fetch("/api/images/like", {
          method: "POST",
          body: JSON.stringify({ imageId: id, action: "dislike" }),
        });
        toast("Disliked :(");
      }
    } catch (error) {
      console.error("Error disliking image:", error);
      toast.error("Failed to dislike image");
    }
  };

  const handleLike = async () => {
    try {
      setLiked(true);
      setDisliked(false);
      if (!liked) {
        await fetch("/api/images/like", {
          method: "POST",
          body: JSON.stringify({ imageId: id, action: "like" }),
        });
        toast.success("Liked :)");
      }
    } catch (error) {
      console.error("Error liking image:", error);
      toast.error("Failed to like image");
    }
  };

  const handleFavourite = async () => {
    try {
      setFavourite((prev) => !prev);
      const res = await fetch("/api/images/favorite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageId: id }),
      });

      const data = await res.json();
      setFavourite(data.favorited);
      toast.success(
        favourite ? "Removed from favorites" : "Added to favorites"
      );
    } catch (err) {
      console.error("Error toggling favorite", err);
      toast.error("Failed to toggle favorite");
    }
  };

  const handleComment = () => {
    setShowComments((prev) => !prev);
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

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch("/api/images", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageId: id }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete image");

      // Refresh image list
      fetchFiles();
    } catch (err) {
      console.error(err);
      toast.error("Error deleting image");
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer bg-white flex flex-col"
      onClick={onClick}
    >
      <AspectRatio ratio={fileWidth / fileHeight}>
        {!showComments ? (
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        ) : (
          <ScrollArea className="overflow-y-auto w-full h-full">
            <CommentList
              comments={allComments}
              imageId={id}
              onClose={() => setShowComments(false)}
            />
          </ScrollArea>
        )}
      </AspectRatio>

      <div className="p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleFavourite}
          >
            <Heart
              className={cn(
                "h-5 w-5",
                favourite ? "fill-red-500 text-black" : ""
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
            onClick={handleLike}
          >
            <ThumbsUp
              className={cn(
                "h-4 w-4",
                liked ? "fill-green-500 text-black" : ""
              )}
            />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleDislike}
          >
            <ThumbsDown
              className={cn(
                "h-4 w-4",
                disliked ? "fill-red-500 text-black" : ""
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
            onClick={() => {
              handleDelete(id);
            }}
            className="pr-3"
          >
            <Trash className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="pr-5 text-end pb-0 text-sm font-medium text-gray-800">
        - {uploadedByUsername}
      </div>
    </div>
  );
};

export default ImageCard;
