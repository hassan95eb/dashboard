import React, { useState } from "react";

export default function HoverCount() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button
        onMouseEnter={handleClick}
        className="bg-green-700 text-white px-2 py-1"
      >
        count: {count}
      </button>
    </div>
  );
}
