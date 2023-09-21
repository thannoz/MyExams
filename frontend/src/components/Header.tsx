import { UserButton } from "@clerk/clerk-react";
import { useState } from "react";

import logo from "../img/logo.png";
import { Menu } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log("Menu clicked");
  return (
    <div className="bg-gray-100 text-white shadow w-full p-2 flex items-center justify-between">
      <div className="flex items-center w-1/2 justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-14 h-18 mr-2" />
        </div>
        <div className="flex md:hidden items-center">
          <button id="menuBtn" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="text-gray-400" size={20} />
          </button>
        </div>
      </div>

      {/* UserButton here */}
      <div className="space-x-5 w-15 h-15 mr-1">
        <UserButton />
      </div>
    </div>
  );
};
