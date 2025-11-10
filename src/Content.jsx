import React from "react";
import Users from "./users/Users";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import Todos from "./todos/Todos";

export default function Content() {
  return (
    <div className="w-full h-full bg-indigo-50">
      <Users />
      <Gallery />
      <Posts />
      <Todos />
    </div>
  );
}
