import React from "react";

export const UnknownUser = () => {
  // TODO: Greet the teacher with the appropriate name
  return (
    <div className="w-full grid grid-cols-6 md:grid-cols-10 gap-4">
      {/* Left side content */}
      <div className="bg-slate-300 border rounded col-span-6 md:col-span-6 p-4">
        {/* Add the name of the user in the UI */}
        <h1>
          You don't have any role assigned to you. Please check in with the
          admins.
        </h1>
      </div>

      {/* Right side content */}
      <div className=" col-span-4 md:col-span-4 p-4">
        <h2 className="text-start text-2xl px-4 py-7 leading-5"></h2>
        {/* Sidebar */}
        <div className="flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};
