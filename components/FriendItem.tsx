import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FriendItemProps {
  name: string;
  isOnline: boolean;
}

const FriendItem = ({ name, isOnline }: FriendItemProps) => {
  return (
    <div className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
      <Circle 
        className={cn(
          "h-2 w-2 mr-3",
          isOnline ? "fill-green-500 stroke-green-500" : "fill-red-500 stroke-red-500"
        )} 
      />
      <span className="font-medium text-gray-700">{name}</span>
    </div>
  );
};

export default FriendItem;
