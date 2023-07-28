import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";

export default function BookCard({ book }) {
  const coverImg = `https://covers.openlibrary.org/b/olid/${book.edition_key[0]}-M.jpg`;

  return (
    <li>
      <Link to={`/book/${book.edition_key[0]}`}>
        <div className="w-full h-96 flex items-center justify-start overflow-hidden">
          <img
            src={coverImg}
            alt={`${book.title} book cover`}
            className="rounded-md z-10 shadow-md"
          />
          <div className="bg-white shadow-lg rounded-xl h-full w-64 -ml-10 pl-16 py-5">
            <h3 className="text-lg font-semibold py-2">{book.title}</h3>
            <div className="flex items-center gap-1 justify-start">
              <BsPencil />
              <h4 className="truncate">
                {book?.author_name?.join(", ") || "--"}
              </h4>
            </div>
            <div className="w-full gap-1">
              <p>Published on {book.first_publish_year}</p>
              <p>{book.number_of_pages_median} pages</p>
              <p>{book.want_to_read_count} wants to read</p>
              <p>{book.ebook_access}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
