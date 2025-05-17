import { Circle, Check, X , Plus} from "lucide-react";
import { cn } from "@/lib/utils";

interface RequestItemProps {
  name: string;
}

const RequestItem = ({ name }: RequestItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 pr-0 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
      <div className="flex items-center">
        <span className="font-medium text-gray-700">{name}</span>
      </div>

      <div className="flex items-center space-x-2 pl-2 pr-2">
        <Plus className="h-3 w-3" />
      </div>
    </div>
  );
};

export default RequestItem;
