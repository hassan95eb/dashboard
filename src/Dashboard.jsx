import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { MainContext } from "./context/MianContext";
export default function Dashboard() {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <MainContext.Provider value={{ ShowMenu, setShowMenu }}>
      <div className="w-full h-screen flex overflow-hidden">
        <div
          className={`${
            ShowMenu ? "w-16" : "w-56"
          } bg-blue-100 transition-all duration-300 border-r border-gray-200`}
        >
          <Sidebar />
        </div>
        <div className="w-full">
          <button
            onClick={() => setShowMenu(!ShowMenu)}
            aria-label="Toggle sidebar"
            title={ShowMenu ? "Expand sidebar" : "Collapse sidebar"}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition absolute"
          >
            {ShowMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.75 12a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.5A.75.75 0 0 1 3.75 12Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M3.75 6.75A.75.75 0 0 1 4.5 6h10.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75ZM3.75 12a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 12Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" />
              </svg>
            )}
          </button>

          <Content />
        </div>
      </div>
    </MainContext.Provider>
  );
}
