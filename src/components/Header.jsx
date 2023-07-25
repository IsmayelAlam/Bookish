import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  return (
    <div>
      <Logo />
      <NavLink to="/home">home</NavLink>
    </div>
  );
}
