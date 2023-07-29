import { Link } from "react-router-dom";
import {
  BsBook,
  BsCalendarDate,
  BsDownload,
  BsPencil,
  BsPeople,
} from "react-icons/bs";
import { BiLogoAmazon } from "react-icons/bi";
import { FaGoodreadsG } from "react-icons/fa";
import { TbDownload, TbDownloadOff } from "react-icons/tb";

import cover from "../assets/book-cover.png";
import cover2 from "../assets/book_cover.jpg";

export default function BookCard({ book }) {
  const coverImg = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : cover2;

  // const coverImg = `https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg`;

  return (
    <li>
      <Link to={`/book/${book?.isbn?.[0]}`}>
        <div className="w-full h-96 flex items-center justify-start">
          <img
            src={coverImg}
            alt={`${book.title} book cover`}
            className="rounded-md z-10 shadow-md w-40 h-2/3"
          />

          <div className="bg-white shadow-lg rounded-xl h-full w-full flex justify-between items-start flex-col -ml-14 pl-20 py-5 pr-2 overflow-hidden">
            <header>
              <h3 className="text-lg font-semibold ">
                {book.title.length > 50
                  ? book.title.slice(0, 50).padEnd(53, ".")
                  : book.title}
              </h3>
              <div className="flex items-center gap-1">
                <BsPencil />
                <h4 className="truncate w-40">
                  {book?.author_name?.[0] || "--"}
                </h4>
              </div>
            </header>

            <div className="w-full space-y-1 text-sm">
              <div className="flex items-center border py-2 px-1 rounded-lg border-blue-400 bg-blue-300 text-blue-900 gap-1 truncate">
                <div className="border p-2 rounded-full">
                  <BsCalendarDate />
                </div>
                <p>Published on {book.first_publish_year}</p>
              </div>

              <div className="flex items-center border py-2 px-1 rounded-lg border-blue-400 bg-blue-300 text-blue-900 gap-1 truncate">
                <div className="border p-2 rounded-full">
                  <BsBook />
                </div>
                <p>{book.number_of_pages_median} pages</p>
              </div>

              <div className="flex items-center border py-2 px-1 rounded-lg border-blue-400 bg-blue-300 text-blue-900 gap-1 truncate">
                <div className="border p-2 rounded-full">
                  <BsPeople />
                </div>
                <p>{book.want_to_read_count} wants to read</p>
              </div>

              <div className="flex items-center justify-between border py-2 px-4 rounded-lg border-blue-400 bg-blue-300 text-blue-900 gap-1 truncate">
                <div className="border p-2 rounded-full">
                  {book.ebook_access === "no_ebook" ? (
                    <TbDownloadOff />
                  ) : (
                    <TbDownload />
                  )}
                </div>
                <div className="border p-2 rounded-full">
                  <BiLogoAmazon />
                </div>
                <div className="border p-2 rounded-full">
                  <FaGoodreadsG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

// -ml-10 pl-16 py-5 pr-2
