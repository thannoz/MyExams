import React from "react";
import { UserButton } from "@clerk/clerk-react";
import { Navbar } from "components/Navbar";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";

const Exams = () => {
  return (
    // <div>
    //   <h1>This is the exams page (Protected)</h1>
    //   <UserButton />
    // </div>

    <main className=" flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      {/* <Navbar /> */}
      <Header />
      {/* <Navbar /> */}

      <Sidebar />
      <main className="md:pl-64 pt-[80px] h-full">{/* {children} */}</main>
    </main>
  );
};

export default Exams;
