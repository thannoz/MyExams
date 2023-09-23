import React from "react";
import { CreateExamForm } from "./CreateExamForm/createExamForm";
import { useUser, useClerk, useAuth } from "@clerk/clerk-react";

export const Teacher = () => {
  // const client = await clerkClient.clients.getClient(clientId);
  const user = useUser();
  const { userId } = useAuth();
  console.log("teacher: " + userId);
  console.log("teacher: " + useClerk);
  // TODO: Greet the teacher with the appropriate name
  return (
    <div className="w-full grid grid-cols-6 md:grid-cols-10 gap-4">
      {/* Left side content */}
      <div className="bg-slate-300 border rounded col-span-6 md:col-span-6 p-4">
        The list of the current exams
      </div>

      {/* Right side content */}
      <div className=" col-span-4 md:col-span-4 p-4">
        <h2 className="text-start text-2xl px-4 py-7 leading-5">
          Create your exam
        </h2>
        {/* Sidebar */}
        <div className="flex flex-col justify-center items-center">
          <CreateExamForm />
        </div>
      </div>
    </div>
  );
};
