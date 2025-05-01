"use client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import Header from "@/components/header";
import { useUser } from "@clerk/nextjs";

const Profile = () => {
  // In a real application, this would come from an auth provider or API
  const {user} = useUser();
  const profile = {
    name: user?.username || "",
    email: user?.primaryEmailAddress?.emailAddress ||"",
    avatar: user?.imageUrl ||"https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=150&h=150"
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onUploadClick={() => {}} />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto shadow-md">
          <CardHeader className="flex flex-col items-center space-y-4 pb-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>
                <User className="h-12 w-12 text-gray-400" />
              </AvatarFallback>
            </Avatar>
          </CardHeader>
          
          <CardContent className="flex flex-col items-center text-center space-y-2">
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-500">{profile.email}</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
