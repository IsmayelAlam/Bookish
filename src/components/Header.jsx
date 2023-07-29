import { Link, NavLink } from "react-router-dom";
import Logo from "../ui/Logo";
import ToggleMode from "../ui/ModeToggle";

export default function Header() {
  return (
    <div className="flex w-full bg-yellow-100 justify-between items-center py-2 px-40">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex justify-between items-center font-semibold space-x-4 text-black uppercase text-md">
        <NavLink to="/about">about</NavLink>
        <NavLink to="/subject">subjects</NavLink>
        <NavLink to="/bookmark">TBR</NavLink>
        <ToggleMode />
      </div>
    </div>
  );
}
