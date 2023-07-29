import { Link } from "react-router-dom";
import {
  BsBook,
  BsCalendarDate,
  BsDownload,
  BsPencil,
  BsPeople,
} from "react-icons/bs";
import { BiLogoAmazon } from "react-icons/bi";
import { FaAmazon, FaGoodreadsG } from "react-icons/fa";
import { TbDownload, TbDownloadOff } from "react-icons/tb";

import cover from "../assets/book_cover.jpg";
import MiniDetailCards from "./MiniDetailCards";

export default function BookCard({ book }) {
  const coverImg = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : cover;

  console.log(book.isbn?.find((num) => num.length === 10));
  const link = `/book/${book?.key.split("/")?.[2]}_${
    book?.edition_key[0]
  }_${book.isbn?.find((num) => num.length === 10)}`;

  return (
    <li>
      <Link to={link}>
        <div className="w-full h-96 flex items-center justify-start">
          <img
            src={coverImg}
            alt={`${book.title} book cover`}
            className="rounded-md z-10 shadow-md w-40 h-2/3"
          />

          <div className="bg-white border-orange-500 border-2 shadow-lg rounded-xl h-full w-full flex justify-between items-center flex-col -ml-14 pl-14 py-5 pr-2">
            <header className="pl-2">
              <h3 className="text-lg font-semibold">
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

            <div className="space-y-1 text-sm w-11/12">
              <MiniDetailCards
                icon={<BsCalendarDate />}
                text={`Published on ${book.first_publish_year || "--"}`}
              />
              <MiniDetailCards
                icon={<BsBook />}
                text={`${book.number_of_pages_median || 0} pages`}
              />
              <MiniDetailCards
                icon={<BsPeople />}
                text={`${book.want_to_read_count || 0} wants to read`}
              />
              <MiniDetailCards
                icon={
                  book.ebook_access === "no_ebook" ? (
                    <TbDownloadOff />
                  ) : (
                    <TbDownload />
                  )
                }
                text={book.ebook_access?.split("_").join(" ")}
              />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

// -ml-10 pl-16 py-5 pr-2
