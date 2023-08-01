import logo_light from "../assets/logo_light.svg";
import logo_dark from "../assets/logo_dark.svg";
import logo from "../assets/logo.svg";
import { useDarkMode } from "../context/DarkModeContext";

export default function Logo() {
  const { darkMode } = useDarkMode();

  const modeLogo = darkMode ? logo_dark : logo_light;

  return (
    <div>
      <img src={modeLogo} alt="logo" className="h-7 mt-1 w-auto" />
    </div>
  );
}
