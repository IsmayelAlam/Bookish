import { Link, NavLink } from "react-router-dom";
import {
  MdInfoOutline,
  MdOutlineBookmarks,
  MdOutlineSubject,
} from "react-icons/md";

import Logo from "../ui/Logo";
import ToggleMode from "../ui/ModeToggle";

export default function Header() {
  return (
    <div className="flex sm:mx-auto sm:my-5 sm:w-10/12 sm:rounded-full w-full sm:px-10 text-sm sm:text-md sm:border-2 px-5 py-2 justify-between items-center bg-bg02 border-border01 ">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex justify-between items-center font-semibold text-color01 capitalize text-md sm:gap-7 sm:w-fit w-full">
        <NavLink to="/">
          <span className="hidden sm:block">home</span>
        </NavLink>
        <NavLink to="/subject">
          <span className="hidden sm:block">subjects</span>
          <MdOutlineSubject className="block sm:hidden h-7 w-7 px-0.5" />
        </NavLink>
        <NavLink to="/about">
          <span className="hidden sm:block">about</span>
          <MdInfoOutline className="block sm:hidden h-7 w-7 px-0.5" />
        </NavLink>
        <NavLink to="/bookmark">
          <span className="hidden sm:block">TBR (Bookmark)</span>
          <MdOutlineBookmarks className="block sm:hidden h-7 w-7 px-0.5" />
        </NavLink>
        <ToggleMode />
      </div>
    </div>
  );
}

// absolute left-1/2 -translate-x-1/2 top-full -translate-y-full sm:-translate-y-0 sm:top-5
