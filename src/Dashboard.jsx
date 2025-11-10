import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-48 bg-blue-500">
        <Sidebar />
      </div>
      <div className="w-full">
        <Content />
      </div>
    </div>
  );
}
