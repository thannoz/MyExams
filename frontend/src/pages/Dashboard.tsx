// Dashboard.js

import React from "react";
import { SignedIn, UserButton } from "@clerk/clerk-react";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <SignedIn>
        {/* Display dashboard content only when the user is signed in */}
        {/* Add your dashboard content here */}
        <p>Welcome to your dashboard!</p>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Dashboard;
