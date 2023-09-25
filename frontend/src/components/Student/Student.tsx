import React, { FC } from "react";
import { useUser } from "@clerk/clerk-react";
import ExamArea from "components/ExamArea/examArea";

interface SearchProps {
  searchValue: string;
}
export const Student: FC<SearchProps> = ({ searchValue }) => {
  const user = useUser();
  console.log("student id: ", user.user?.id);
  return (
    <div className="w-full grid grid-cols-6 md:grid-cols-10 gap-4">
      {/* Left side content */}
      <div className="bg-slate-300 border rounded col-span-6 md:col-span-6 p-4">
        <ExamArea searchValue={searchValue} />
      </div>

      {/* Right side content */}
      <div className=" col-span-4 md:col-span-4 p-4">
        <h2 className="text-start text-2xl px-4 py-7 leading-5">
          Student Profile
        </h2>
        {/* Create a custom user Profile */}
        Custom user profile will be rendered here
        {/* Sidebar */}
        <div className="flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};
