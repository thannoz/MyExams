import { UserButton } from "@clerk/clerk-react";
import React from "react";
import NavbarHeader from "./NavbarHeader";
import ForumContent from "../components/Forum/ForumContent";


const Forum = () => {
  return (
    <div>
      <NavbarHeader content={<ForumContent />} />;
    </div>
  );
};

export default Forum;

