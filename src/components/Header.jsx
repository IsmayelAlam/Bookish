import { Link, NavLink } from "react-router-dom";
import Logo from "../ui/Logo";
import ToggleMode from "../ui/ModeToggle";

export default function Header() {
  return (
    <div className="flex mx-auto w-10/12 my-5 px-10 py-2 rounded-full shadow-md justify-between items-center bg-bg02">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex justify-between items-center font-semibold gap-7 text-black capitalize text-md">
        <NavLink to="/">home</NavLink>
        <NavLink to="/subject">subjects</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/bookmark">TBR (Bookmark)</NavLink>
        <ToggleMode />
      </div>
    </div>
  );
}
