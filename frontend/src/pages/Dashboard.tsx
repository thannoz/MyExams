import React from "react";
import NavbarHeader from "./NavbarHeader";
import { DashboardContent } from "components/DashboardContent";

const Dashboard = () => {
  return <NavbarHeader content={<DashboardContent />} />;
};

export default Dashboard;
