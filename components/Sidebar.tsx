import { useEffect, useRef } from "react";
import { UserPlus, InboxIcon } from "lucide-react";
import FriendItem from "./FriendItem";
import RequestItem from "./RequestItem";
import { useSidebar } from "../hooks/use-sidebar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useInviteBubbleStore } from "@/hooks/use-invite";
import { useProfileBubbleStore } from "@/hooks/use-profile";

// Mock data for friends
const friends = [
  { id: 1, name: "Sarah Johnson", isOnline: true },
  { id: 2, name: "Michael Chen", isOnline: true },
  { id: 3, name: "Emma Wilson", isOnline: false },
  { id: 4, name: "David Kim", isOnline: true },
  { id: 5, name: "Rachel Patel", isOnline: false },
  { id: 6, name: "James Rodriguez", isOnline: true },
];

const requests = [
  { id: 1, name: "Sarah Johnson", isOnline: true },
  { id: 2, name: "Michael Chen", isOnline: true },
  { id: 3, name: "Emma Wilson", isOnline: false },
  { id: 4, name: "David Kim", isOnline: true },
  { id: 5, name: "Rachel Patel", isOnline: false },
  { id: 6, name: "James Rodriguez", isOnline: true },
];

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const isMobile = useIsMobile();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    if (isMobile && isOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(e.target as Node)
        ) {
          closeSidebar();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, isMobile, closeSidebar]);

  return (
    <>
      {/* Optional overlay for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-10 " onClick={closeSidebar} />
      )}

      <aside
        ref={sidebarRef}
        className={cn(
          "fixed md:static scrollbar-hide overflow-y-auto h-[calc(100vh-80px)] bg-white border-r border-gray-200 z-20 transition-all duration-500 ease-in-out",
          isOpen
            ? " translate-x-0"
            : "w-0 md:w-0 -translate-x-full md:-translate-x-full"
        )}
      >
        {isOpen && (
          <>
            <div className="p-4 pr-2 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Friends</h2>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-purple-50"
                onClick={()=>{closeSidebar(); useInviteBubbleStore.getState().toggleInvite(); useProfileBubbleStore.getState().setIsOpen(false)}}
              >
                <UserPlus className="h-5 w-5" />
              </Button>
            </div>

            <ScrollArea className="overflow-y-auto py-2 px-2 w-full">
              {friends.map((friend) => (
                <FriendItem
                  key={friend.id}
                  name={friend.name}
                  isOnline={friend.isOnline}
                />
              ))}
            </ScrollArea>

            <div className="p-4 pr-2 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Requests</h2>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-purple-50"
              >
                <InboxIcon className="h-5 w-5" />
              </Button>
            </div>

            <ScrollArea className="overflow-y-auto py-2 px-2 w-full">
              {requests.map((request) => (
                <RequestItem
                  key={request.id}
                  name={request.name}
                />
              ))}
            </ScrollArea>
          </>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
