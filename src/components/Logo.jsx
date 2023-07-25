import logo_light from "../assets/logo_light.svg";
import logo_dark from "../assets/logo_dark.svg";

export default function Logo() {
  return (
    <div>
      <img src={logo_dark} alt="logo" className="h-10 w-auto" />
    </div>
  );
}
