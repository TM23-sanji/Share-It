import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface CommentProps {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  onClose?: () => void;
}

const comment: React.FC<CommentProps> = ({
  user,
  content,
}) => {

  return (
    <div className="relative group bg-white dark:bg-gray-800 p-4 rounded-lg border border-comment-border mb-3 transition-all hover:shadow-sm">
      
      <div className="flex items-start space-x-3">
        <Avatar className="h-8 w-8 border">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center mb-1">
            <p className="font-medium text-sm mr-1">{user.name}</p>
        </div>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words">
            {content}
          </p>
          

        </div>
      </div>
    </div>
  );
};

export default comment;
