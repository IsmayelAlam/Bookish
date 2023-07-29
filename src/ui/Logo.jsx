import logo_light from "../assets/logo_light.svg";
import logo_dark from "../assets/logo_dark.svg";

const isDark = window.matchMedia("(prefers-color-scheme: dark)");

export default function Logo() {
  return (
    <div>
      <img
        src={!isDark ? logo_dark : logo_light}
        alt="logo"
        className="h-10 w-auto"
      />
    </div>
  );
}
