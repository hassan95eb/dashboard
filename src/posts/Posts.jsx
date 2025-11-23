import React from "react";
import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

export default function Posts() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <ClickCount />
      <HoverCount />
    </div>
  );
}
