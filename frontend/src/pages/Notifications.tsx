import React from "react";
import NavbarHeader from "./NavbarHeader";
import { NotificationContent } from "components/NotificationContent";

export default function Notifications() {
  return <NavbarHeader content={<NotificationContent />} />;
}
