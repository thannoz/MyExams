import React from "react";
import NavbarHeader from "./NavbarHeader";
import { NotificationContent } from "../components/Notififaction/NotificationContent";

export default function Notifications() {
  return <NavbarHeader content={<NotificationContent />} />;
}
