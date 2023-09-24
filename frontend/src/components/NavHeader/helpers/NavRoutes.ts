import { Home, Speech, BellDot, MailCheck } from "lucide-react";
import React from "react";

type IconType = typeof Home | typeof Speech | typeof BellDot | typeof MailCheck;

type NavigationItem = {
  label: string;
  icon: IconType;
  href: string;
};

export const NavRoutes: NavigationItem[] = [
  { label: "Klausuren", icon: Home, href: "/dashboard" },
  { label: "Forum", icon: Speech, href: "/forum" },
  { label: "Nachrichten", icon: MailCheck, href: "/message" },
  // { label: "Benarichtigungen", icon: BellDot, href: "/notification" },
];
