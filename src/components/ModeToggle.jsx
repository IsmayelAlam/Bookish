import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function ToggleMode() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className=" h-7 w-14 bg-orange-500 rounded-full flex justify-between items-center p-1 relative"
      onClick={setDarkMode.bind(null, !darkMode)}
    >
      <HiSun className="h-6 w-6" />
      <HiMoon className="h-5 w-5" />
      <div
        className={`h-6 w-6 absolute bg-slate-100 rounded-full top-1/2 -translate-y-1/2 transition-all duration-200 ${
          darkMode ? " left-1" : "left-7"
        }`}
      />
    </div>
  );
}
