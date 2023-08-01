import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

export default function ToggleMode() {
  const { toggleDarkMode, darkMode } = useDarkMode();

  return (
    <div
      className=" h-7 w-14 bg-orange-500 rounded-full flex justify-between items-center p-1 relative"
      onClick={toggleDarkMode}
    >
      <HiSun className="h-6 w-6 text-yellow-300" />
      <HiMoon className="h-5 w-5 text-gray-300" />
      <div
        className={`h-6 w-6 absolute bg-slate-100 rounded-full top-1/2 -translate-y-1/2 transition-all duration-200 ${
          darkMode ? "left-1" : "left-7"
        }`}
      />
    </div>
  );
}
