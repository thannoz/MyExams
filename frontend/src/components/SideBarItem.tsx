import React from "react";

export const SideBarItem = () => {
  return (
    <li className="my-px">
      <a
        href="#"
        className="flex flex-row items-center h-10 px-3 rounded-full text-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="flex items-center justify-center text-lg text-gray-400">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        </span>
        <span className="ml-3">Forum</span>
      </a>
    </li>
  );
};
