import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

export default function ToggleMode() {
  const { toggleDarkMode, darkMode } = useDarkMode();

  return (
    <div
      className=" h-8 w-16 border-2 border-border01 bg-bg01/70 rounded-full text-color01 flex justify-between items-center p-1 relative"
      onClick={toggleDarkMode}
    >
      <HiSun className="h-6 w-6" />
      <HiMoon className="h-5 w-5" />
      <div
        className={`h-6 w-6 absolute bg-color02 rounded-full top-1/2 -translate-y-1/2 transition-all duration-200 ${
          !darkMode ? "left-1" : "left-8"
        }`}
      />
    </div>
  );
}
