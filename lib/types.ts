export interface ImageType {
  id:string;
  src: string;
  alt: string;
  fileId: string;
  fileWidth: number;
  fileHeight: number;
  likes: number;
  dislikes: number;
  isLiked: boolean;
  isDisliked: boolean;
  commentCount: number;
  favoriteCount: number;
  isFavorited?: boolean;
  uploadedByUsername: string;
}
