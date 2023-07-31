import { Link } from "react-router-dom";
import { BiBook, BiCake } from "react-icons/bi";
import { MdOutlineSubject } from "react-icons/md";

export default function AuthorCard({ author }) {
  const empty = <span>&mdash;</span>;

  return (
    <Link to={`/author/${author.key}`}>
      <div className="bg-white w-full border-orange-500 border-2 rounded-lg overflow-hidden flex flex-col items-center h-96">
        <div className="h-64 w-full bg-white">
          <img
            src={`https://covers.openlibrary.org/a/olid/${author.key}-M.jpg`}
            alt={`portrait of ${author.name}`}
            className="h-full mx-auto z-10 pt-2"
          />
        </div>

        <h2 className="font-semibold text-lg truncate w-full text-center p-2">
          {author.name}
        </h2>

        <div className="w-full pb-4 pl-2 flex flex-col gap-1 items-start truncate">
          <div className="flex gap-1 items-center">
            <BiCake />
            <p>{author.birth_date || empty}</p>
          </div>
          <div className="flex gap-1 items-center">
            <BiBook />
            <p>{author.top_work || empty}</p>
          </div>
          <div className="flex gap-1 items-center">
            <MdOutlineSubject />
            <p>{author.top_subjects?.[0] || empty}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
