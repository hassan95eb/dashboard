import React, { useContext } from "react";
import { MainContext } from "./context/MianContext";

export default function Sidebar() {
  const { ShowMenu, setShowMenu } = useContext(MainContext);

  const navItems = [
    {
      key: "users",
      label: "Users",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M7.5 7.5a3 3 0 1 1 6.001.001A3 3 0 0 1 7.5 7.5Z" />
          <path d="M2.25 20.118a8.25 8.25 0 0 1 16.5 0 .75.75 0 0 1-.75.882H3a.75.75 0 0 1-.75-.882Z" />
        </svg>
      ),
    },
    {
      key: "gallery",
      label: "Gallery",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M3.75 4.5A2.25 2.25 0 0 0 1.5 6.75v10.5A2.25 2.25 0 0 0 3.75 19.5h16.5a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 20.25 4.5H3.75Zm.75 11.25 3.75-4.5 3 3.75 4.5-6 4.5 6v2.25H4.5V15.75Z" />
        </svg>
      ),
    },
    {
      key: "posts",
      label: "Posts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V8.872a2.25 2.25 0 0 0-.659-1.591l-3.622-3.622A2.25 2.25 0 0 0 13.628 3H6.75Zm6.878 1.5 3.372 3.372a.75.75 0 0 1 .22.53V8.25h-3.75a.75.75 0 0 1-.75-.75V4.5h.908Z" />
        </svg>
      ),
    },
    {
      key: "todos",
      label: "Todos",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M9 2.25A.75.75 0 0 1 9.75 3v.75H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h3V3A.75.75 0 0 1 9 2.25ZM9 6a.75.75 0 0 0 0 1.5h6A.75.75 0 0 0 15 6H9Zm0 3.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Zm0 3.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="h-full text-black flex flex-col">
      <div className="flex items-center justify-between px-3 py-3">
        <div className="flex items-center gap-2">
          <button
            className="text-black/90 hover:text-gray-500 transition"
            aria-label={ShowMenu ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setShowMenu(!ShowMenu)}
            title={ShowMenu ? "Expand" : "Collapse"}
          >
            {ShowMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M15.75 19.5 8.25 12l7.5-7.5v15Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M8.25 4.5 15.75 12l-7.5 7.5V4.5Z" />
              </svg>
            )}
          </button>
          {!ShowMenu && (
            <span className="font-semibold tracking-wide">My Dashboard</span>
          )}
        </div>
      </div>

      <nav className="flex-1 px-2 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href="#"
                className={`flex items-center gap-3 rounded-md px-2 py-2 hover:bg-white/10 transition ${
                  ShowMenu ? "justify-center" : ""
                }`}
                title={ShowMenu ? item.label : undefined}
              >
                <span className="shrink-0">{item.icon}</span>
                {!ShowMenu && <span className="text-sm">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto px-3 py-3">
        <div
          className={`flex ${
            ShowMenu ? "justify-center" : "justify-between"
          } items-center`}
        >
          {!ShowMenu && (
            <span className="text-xs text-white/80">Follow us</span>
          )}
          <div className={`flex ${ShowMenu ? "hidden" : "flex"}`}>
            <a
              href="#"
              aria-label="Twitter"
              title="Twitter"
              className="text-white/90 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.177 0-.353-.012-.528A8.343 8.343 0 0 0 22 5.922a8.19 8.19 0 0 1-2.357.646 4.117 4.117 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.606.996 4.107 4.107 0 0 0-6.993 3.743 11.654 11.654 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.479A4.073 4.073 0 0 1 3.2 9.71v.052a4.106 4.106 0 0 0 3.292 4.025 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="GitHub"
              title="GitHub"
              className="text-white/90 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M12 .75C5.787.75.75 5.787.75 12c0 5.003 3.243 9.236 7.737 10.735.566.101.774-.246.774-.546 0-.27-.01-.985-.015-1.935-3.146.684-3.81-1.517-3.81-1.517-.516-1.31-1.26-1.66-1.26-1.66-1.03-.704.078-.69.078-.69 1.14.08 1.741 1.172 1.741 1.172 1.012 1.735 2.655 1.234 3.303.943.103-.733.396-1.234.721-1.518-2.512-.286-5.153-1.256-5.153-5.589 0-1.236.441-2.247 1.165-3.037-.117-.286-.504-1.438.11-2.997 0 0 .948-.304 3.11 1.16a10.82 10.82 0 0 1 2.833-.381c.962.005 1.93.13 2.835.381 2.16-1.464 3.107-1.16 3.107-1.16.616 1.559.23 2.711.113 2.997.725.79 1.163 1.801 1.163 3.037 0 4.343-2.646 5.3-5.165 5.58.405.348.768 1.037.768 2.092 0 1.51-.014 2.728-.014 3.099 0 .302.204.654.78.543C20.01 21.232 23.25 17 23.25 12c0-6.213-5.037-11.25-11.25-11.25Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-white/90 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M6.94 6.5a2.19 2.19 0 1 1-4.38 0 2.19 2.19 0 0 1 4.38 0ZM2.81 8.25h3.88v12.5H2.81V8.25Zm7.03 0H13.5v1.71h.05c.65-1.24 2.24-2.55 4.62-2.55 4.94 0 5.85 3.25 5.85 7.48v5.86h-3.88v-5.2c0-1.24-.02-2.84-1.73-2.84-1.74 0-2.01 1.36-2.01 2.75v5.29h-3.88V8.25Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
