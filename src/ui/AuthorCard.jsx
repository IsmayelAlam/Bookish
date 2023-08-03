import { Link } from "react-router-dom";
import { BiBook, BiCake } from "react-icons/bi";
import { MdOutlineSubject } from "react-icons/md";

import { namePadding } from "../util/helper";
import avatar from "../assets/avatar.png";

export default function AuthorCard({ author }) {
  const empty = <span>&mdash;</span>;

  return (
    <Link to={`/author/${author.key}`}>
      <div className="bg-bg02 w-64 border-border02 border-2 rounded-lg overflow-hidden flex flex-col items-center h-96 text-grayish01 ">
        <div className="h-64 w-44 relative">
          <img
            src={avatar}
            alt={`portrait of ${author.name}`}
            className="h-full w-full mx-auto pt-2 absolute top-0 left-0 z-0"
          />
          <img
            src={`https://covers.openlibrary.org/a/olid/${author.key}-M.jpg`}
            alt={`portrait of ${author.name}`}
            className="h-full w-full mx-auto z-10 pt-2 absolute top-0 left-0"
          />
        </div>

        <h2 className="font-semibold text-lg truncate w-full text-center p-2 text-color01">
          {author.name}
        </h2>

        <div className="w-full pb-4 pl-2 flex flex-col gap-1 items-start truncate">
          <div className="flex gap-1 items-center">
            <BiCake />
            <p>{author.birth_date || empty}</p>
          </div>
          <div className="flex gap-1 items-center">
            <BiBook />
            <p>({author.work_count || empty})</p>
            <p>{namePadding(author.top_work, 25) || empty}</p>
          </div>
          <div className="flex gap-1 items-center">
            <MdOutlineSubject />
            <p>
              {author.top_subjects?.find((subject) => subject.length < 25) ||
                empty}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
