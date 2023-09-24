import React from "react";
import NavbarHeader from "./NavbarHeader";
import { MessageContent } from "components/Message/MessageContent";

export default function Nachrichten() {
  return <NavbarHeader content={<MessageContent />} />;
}
