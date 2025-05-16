import React, { useState } from 'react';
import Comment, { CommentProps } from './comment';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { X, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommentListProps {
  comments: CommentProps[];
  onClose: () => void;
}

const commentList: React.FC<CommentListProps> = ({ comments: initialComments, onClose }) => {
  const [comments, setComments] = useState<CommentProps[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [visibleComments, setVisibleComments] = useState<string[]>(initialComments.map(c => c.id));
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseComment = (id: string) => {
    setVisibleComments(prev => prev.filter(commentId => commentId !== id));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj: CommentProps = {
      id: `comment-${Date.now()}`,
      user: {
        name: 'Current User',
        avatar: '/placeholder.svg',
      },
      content: newComment,
    };

    setComments(prev => [newCommentObj, ...prev]);
    setVisibleComments(prev => [newCommentObj.id, ...prev]);
    setNewComment('');
  };

  const handleCloseAll = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={cn(
      "bg-gray-50 dark:bg-gray-900 border rounded-lg p-4 max-w-2xl mx-auto transition-all",
      isClosing && "animate-fade-out"
    )}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Comments</h3>
        <Button variant="ghost" size="sm" onClick={handleCloseAll}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Add comment form */}
      <form onSubmit={handleSubmitComment} className="flex gap-3 mb-6">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" alt="Your avatar" />
          <AvatarFallback>YA</AvatarFallback>
        </Avatar>
        <div className="flex-1 flex gap-2">
          <Input 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1"
          />
          <Button type="submit" ><Send className="h-4 w-4" /></Button>
        </div>
      </form>

      {/* Comments list */}
      <div className="space-y-4">
        {comments
          .filter(comment => visibleComments.includes(comment.id))
          .map(comment => (
            <Comment
              key={comment.id}
              {...comment}
              onClose={() => handleCloseComment(comment.id)}
            />
          ))}
        {visibleComments.length === 0 && (
          <p className="text-center text-muted-foreground py-6">No comments to display</p>
        )}
      </div>
    </div>
  );
};

export default commentList;
