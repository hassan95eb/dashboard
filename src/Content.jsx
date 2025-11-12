import React from "react";
import Users from "./users/Users";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import Todos from "./todos/Todos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Content() {
  return (
    <div className="w-full h-full bg-indigo-50">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}
