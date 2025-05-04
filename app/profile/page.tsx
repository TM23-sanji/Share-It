"use client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import Header from "@/components/header";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Profile = () => {
  // In a real application, this would come from an auth provider or API
  const { user } = useUser();
  const router = useRouter();
  const profile = {
    name: user?.username || "Guest",
    email: user?.primaryEmailAddress?.emailAddress,
    avatar:
      user?.imageUrl ||
      "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yd0hqUnAycURwTk9RUnVIMk90c01STFExZmIiLCJyaWQiOiJ1c2VyXzJ3Vkc1aU9xZHlqUnVEcHBHanZxUVk0WFpzQiJ9",
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
            {profile.email?.trim() ? (
              <p className="text-gray-500">{profile.email}</p>
            ) : (
              <p
                className="text-blue-400 underline cursor-pointer"
                onClick={() => router.push('/signup')} 
              >
                Click here to Signup
              </p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
