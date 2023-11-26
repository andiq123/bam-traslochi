"use client";
import { useState } from "react";

const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-8 h-8 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    ></path>
  </svg>
);

function HeartFloating() {
  const [clicks, setClicks] = useState<any>([]);
  const [timeOut, setTimeOut] = useState<NodeJS.Timeout | undefined>(undefined);

  const addClick = () => {
    setClicks([...clicks, clicks.length + 1]);

    if (timeOut) clearTimeout(timeOut);

    setTimeOut(
      setTimeout(() => {
        setClicks([]);
        setTimeOut(undefined);
      }, 2000)
    );
  };

  return (
    <div
      className="cursor-pointer  bg-base-300 p-2 rounded-lg hover:bg-base-200 transition-all duration-300 ease-in-out"
      onClick={addClick}
    >
      <div className="hover:scale-110 transition-all duration-300 relative">
        {svg}
        {clicks.map((click: any) => {
          return (
            <div
              key={click}
              className="absolute top-0 left-0"
              style={{
                animation: `heart-float 1s forwards ease-in-out`,
              }}
            >
              {svg}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeartFloating;
