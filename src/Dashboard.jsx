import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { MainContext } from "./context/MianContext";
export default function Dashboard() {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <MainContext.Provider value={{ ShowMenu, setShowMenu }}>
      <div className="w-full h-screen bg-slate-100 flex overflow-hidden">
        <div
          className={`${
            ShowMenu ? "w-16" : "w-56"
          } bg-white/90 backdrop-blur border-r border-slate-200/70 shadow-[0_25px_50px_-20px_rgba(15,23,42,0.35)] transition-all duration-300`}
        >
          <Sidebar />
        </div>
        <div className="relative flex-1">
          <button
            onClick={() => setShowMenu(!ShowMenu)}
            aria-label="Toggle sidebar"
            title={ShowMenu ? "Expand sidebar" : "Collapse sidebar"}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out absolute top-6 left-6"
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

          <div className="h-full overflow-y-auto px-6 md:px-10 py-10">
            <Content />
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}
