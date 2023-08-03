import { Link } from "react-router-dom";
import { BsBook, BsCalendarDate, BsPencil, BsPeople } from "react-icons/bs";
import { TbDownload, TbDownloadOff } from "react-icons/tb";

import cover from "../assets/book_cover.jpg";
import MiniDetailCards from "./MiniDetailCards";

export default function BookCard({ book }) {
  const coverImg = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : cover;

  let link = `${book?.key.split("/")?.[2]}_${
    book?.edition_key?.[0]
  }_${book.isbn?.find((num) => num.length === 10)}_${
    book?.lending_identifier_s || ""
  }`;

  // console.log(book);

  return (
    <li>
      <Link to={`/book/${link}`}>
        <div className="w-full h-96 flex items-center justify-start text-color01">
          <img
            src={coverImg}
            alt={`${book.title} book cover`}
            className="rounded-lg z-10 shadow-md w-40"
          />

          <div className="bg-bg02 border-border02 w-64 border-2 shadow-lg rounded-xl h-full flex justify-between items-center flex-col -ml-14 mx-2 pl-14 py-5 pr-2">
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

            <div className="space-y-2 text-sm w-11/12">
              <MiniDetailCards
                icon={<BsCalendarDate />}
                text={`Published on ${book.first_publish_year || "--"}`}
              />
              <MiniDetailCards
                icon={<BsPeople />}
                text={`${book.want_to_read_count || 0} wants to read`}
              />
              <MiniDetailCards
                icon={
                  !book.lending_identifier_s ? (
                    <TbDownloadOff />
                  ) : (
                    <TbDownload />
                  )
                }
                text={
                  book.lending_identifier_s
                    ? "Free Digital Copy"
                    : "No Free Copy"
                }
              />
              <MiniDetailCards
                icon={<BsBook />}
                text={`${book.number_of_pages_median || 0} pages`}
              />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

// -ml-10 pl-16 py-5 pr-2
