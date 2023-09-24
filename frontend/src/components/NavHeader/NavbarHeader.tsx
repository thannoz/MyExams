import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import { NavRoutes } from "./helpers/NavRoutes";

interface NavBarHeaderProps {
  content: React.ReactNode;
}

function NavbarHeader({ content }: NavBarHeaderProps) {
  const user = useUser();
  console.log("logged in user:", user.user?.publicMetadata);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleOpenMobileView = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <div className="bg-gray-100 text-white shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center w-1/2 justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-14 h-18 mr-2" />
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button id="menuBtn" onClick={handleOpenMobileView}>
              <Menu className="text-gray-400" size={20} />
            </button>
          </div>
        </div>
        {/* UserButton here */}
        <div className="space-x-5 w-15 h-15 mr-1">
          <UserButton />
        </div>
      </div>
      <div className="flex-1 flex flex-wrap">
        <div
          className={`p-2 bg-gray-100 w-full md:w-60 flex flex-col md:flex ${
            mobileMenuOpen ? "hidden" : ""
          }`}
          id="sideNav"
        >
          <nav>
            <div>
              {NavRoutes.map((nv) => (
                <Link
                  key={nv.label}
                  to={nv.href}
                  className="flex items-center justify-between 
              text-gray-500 py-2.5 px-4 my-4 rounded
               transition duration-200 
               hover:bg-gradient-to-r 
               hover:from-gray-500 hover:to-purple-500
                hover:text-white"
                >
                  <nv.icon />
                  <label className="cursor-pointer">{nv.label}</label>
                </Link>
              ))}
            </div>
          </nav>
        </div>
        {content}
      </div>
    </div>
  );
}

export default NavbarHeader;
