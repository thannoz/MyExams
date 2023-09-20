import React from "react";
import { Link } from "react-router-dom";
import { Bell, Camera, GraduationCap, MailCheck, School } from "lucide-react";

import logo from "../img/logo.png";
import study from "../img/study.svg";

export const Sidebar = () => {
  const SideBarRoutes = [
    {
      icon: "Icon",
      lable: "Forum",
      href: "/forum",
    },
    {
      icon: "Icon",
      lable: "Nachrichten",
      href: "/messages",
    },
    {
      icon: "Icon",
      lable: "Benachrichtigung",
      href: "/notifications",
    },
  ];
  return (
    <aside className="h-screen w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-600">
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <a href="#" className="inline-flex flex-row items-center">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">myExams</span>
              <img className="h-14 w-auto" src={logo} alt="" />
              {/* <Camera color="red" size={20} /> */}
            </Link>
          </a>
        </div>
      </div>
      <div className="sidebar-content px-4 py-6">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-full text-gray-700 bg-gray-100"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                {/* <img className="h-8 w-auto" src={study} alt="study" /> */}
                <GraduationCap color="blue" size={30} />
              </span>
              <span className="ml-3">Klausuren</span>
            </a>
          </li>

          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-full text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <School color="blue" size={30} />
              </span>
              <span className="ml-3">Forum</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <MailCheck color="blue" size={30} />
              </span>
              <span className="ml-3">Nachrichten</span>
            </a>
          </li>

          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <Bell color="blue" size={30} />
              </span>
              <span className="ml-3">Benachrichtigung</span>
              {/* <span className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">
                10
              </span> */}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
