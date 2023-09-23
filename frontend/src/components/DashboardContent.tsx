import React from "react";
import { useUser } from "@clerk/clerk-react";

import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { UnknownUser } from "./UnknownUser";

export const DashboardContent = () => {
  const user = useUser();
  console.log("user role:", user.user?.publicMetadata.role);

  return (
    <div className="flex-1 p-4 w-full md:w-1/2">
      <div className="relative max-w-md w-full">
        <div className="absolute top-1 left-2 inline-flex items-center p-2">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        <input
          className="w-full md:max-w-xl h-10 pl-10 pr-4 py-1 text-base 
          placeholder-gray-500 border rounded focus:shadow-outline"
          type="search"
          placeholder="Search..."
        />
      </div>
      <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
        {user.user?.publicMetadata.role === "teacher" && <Teacher />}
        {user.user?.publicMetadata.role === "student" && <Student />}
        {!user.user?.publicMetadata.role && <UnknownUser />}
      </div>
    </div>
  );
};
