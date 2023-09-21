import React from "react";

export const DashboardContent = () => {
  return (
    <div className="flex-1 p-4 w-full md:w-1/2">
      <div className="relative max-w-md w-full">
        <div className="absolute top-1 left-2 inline-flex items-center p-2">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        <input
          className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
          type="search"
          placeholder="Search..."
        />
        {/*  Usuarios*/}
      </div>
      <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
        <div className="flex-1 bg-white p-4 shadow rounded md:w-1/2">
          <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
          <div className="my-1"></div>
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nemo
            veniam tenetur hic sapiente sunt ullam nihil magni inventore,
            exercitationem tempore assumenda modi dolores molestias
            necessitatibus aspernatur, eveniet voluptatem at.
          </p>
        </div>
      </div>
      I can write here anything I want
    </div>
  );
};
