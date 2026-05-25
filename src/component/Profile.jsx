"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";
import { EditBooking } from "./EditBooking";
import EditProfile from "./EditProfile";

const Profile = () => {
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;

  return (
    <div className="container mx-auto flex items-center justify-center ">
      <Card className="w-96 gap-2 shadow flex items-center justify-center">
        <Avatar>
          <Avatar.Image alt={user?.name} src={user?.image} />
        </Avatar>
        <Card.Header>
          <Card.Title>User Name:{user?.name}</Card.Title>
          <Card.Description>User Email:{user?.email}</Card.Description>
        </Card.Header>
        <Card.Footer>
          <EditProfile />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Profile;
