import logo_light from "../assets/logo_light.svg";
import logo_dark from "../assets/logo_dark.svg";
import logo from "../assets/logo.svg";

const isDark = window.matchMedia("(prefers-color-scheme: dark)");

export default function Logo() {
  return (
    <div>
      <img src={logo_light} alt="logo" className="h-7 mt-1 w-auto" />
    </div>
  );
}
