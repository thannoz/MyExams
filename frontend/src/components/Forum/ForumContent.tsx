import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";

function ForumContent() {
  const user = useUser();

  return (
    <div className="flex-1 p-4 w-full md:w-1/2">
      <div className="relative max-w-md w-full">
        <div className="absolute top-1 left-2 inline-flex items-center p-2"></div>
      </div>
      Forum content belongs here
    </div>
  );
}

export default ForumContent;
