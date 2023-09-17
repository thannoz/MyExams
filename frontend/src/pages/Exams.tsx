import React from "react";
import { UserButton } from "@clerk/clerk-react";

const Exams = () => {
  return (
    <div>
      <h1>This is the exams page (Protected)</h1>
      <UserButton />
    </div>
  );
};

export default Exams;
