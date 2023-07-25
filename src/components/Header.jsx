import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import ToggleMode from "./ModeToggle";

export default function Header() {
  return (
    <div className="flex w-full bg-slate-500 justify-between items-center py-2 px-40">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex justify-between items-center font-semibold space-x-4 text-white uppercase text-md">
        <NavLink to="/subjects">subjects</NavLink>
        <NavLink to="/bookmark">TBR</NavLink>
        <ToggleMode />
      </div>
    </div>
  );
}
