"use client"
import React from "react";
import { User, Upload, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { GalleryVerticalEnd } from "lucide-react";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";

const Header = ({ onUploadClick }: { onUploadClick: () => void }) => {
  const router = useRouter(); 
  const isMobile = useIsMobile();
  const {signOut} = useClerk();

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        {isMobile && (
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-black flex items-center justify-center">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <h1 onClick={() => router.push('/')} className="ml-2 font-semibold text-lg cursor-pointer">Enjoy Inc.</h1>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          onClick={onUploadClick}
          size="sm"
          className="flex items-center gap-1 cursor-pointer"
        >
          <Upload className="h-4 w-4" />
          {!isMobile && <span>Upload</span>}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={()=>router.push('/profile')} className="font-semibold">Profile</DropdownMenuItem>
            <DropdownMenuItem className="font-semibold">Favourites</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>{signOut(); router.push('/login')}} className="font-semibold">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
