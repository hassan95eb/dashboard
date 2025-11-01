import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/8 bg-blue-500">
        <Sidebar />
      </div>

      <div className="w-7/8">
        <Content />
      </div>
    </div>
  );
}
