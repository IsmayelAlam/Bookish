import { useDarkMode } from "../context/DarkModeContext";

import logo_light from "../assets/logo_light.svg";
import logo_dark from "../assets/logo_dark.svg";
import logo from "../assets/logo.svg";

export default function Logo({ ...rest }) {
  const { darkMode } = useDarkMode();

  let modeLogo =
    window.innerWidth < 640 ? logo : darkMode ? logo_dark : logo_light;

  return (
    <div {...rest}>
      <img src={modeLogo} alt="logo" className="h-7 mt-1 w-auto" />
    </div>
  );
}
