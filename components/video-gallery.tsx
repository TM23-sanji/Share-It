import React from "react";
import VideoCard from "./video-card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface VideoGalleryProps {
  videos: Array<{
    src: string;
    alt: string;
    fileId: string;
    fileWidth: number;
    fileHeight: number;
    size: number;
    thumbnail: string;
  }>;
  setVideos: React.Dispatch<React.SetStateAction<any>>;
  fetchFiles: ()=>void;
}

const VideoGallery = ({ videos, setVideos, fetchFiles }: VideoGalleryProps) => {
  return (
    <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {videos.map((video) => (
            <div key={video.fileId}>
              <VideoCard
                src={video.src}
                alt={video.alt}
                fileId={video.fileId}
                fileWidth={video.fileWidth}
                fileHeight={video.fileHeight}
                size={video.size}
                thumbnail = {video.thumbnail}
                setVideos={setVideos}
                fetchFiles={fetchFiles}
              />
            </div>
          ))}
        </div>
    </div>
  );
};

export default VideoGallery;
