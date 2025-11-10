import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { MainContext } from "./context/MianContext";
export default function Dashboard() {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <MainContext.Provider value={{ ShowMenu, setShowMenu }}>
      <div className="w-full h-screen flex">
        <div
          className={`${
            ShowMenu ? "w-16" : "w-56"
          } bg-blue-100 transition-all duration-300 border-r border-gray-200`}
        >
          <Sidebar />
        </div>
        <div className="w-full">
          <Content />
        </div>
      </div>
    </MainContext.Provider>
  );
}
