import { UserButton } from "@clerk/clerk-react";
import React from "react";

const Forum = () => {
  return (
    <div>
      <h1>This is the forum page (protected)</h1>
      <UserButton />
    </div>
  );
};

export default Forum;
