import { Link } from "react-router-dom";
import cover from "../assets/book-cover.png";

export default function BookCard({ book }) {
  return (
    <li>
      <Link to={`/book/${book.edition_key[0]}`}>
        <div className="h-96 w-full border rounded-xl overflow-hidden shadow-lg">
          <div className="bg-slate-600 w-full h-2/3">
            <img
              src={cover}
              alt="placeholder generic book cover"
              className="h-full"
            />
          </div>
          <h3 className="text-lg font-semibold truncate">{book.title}</h3>
          <h4 className="w-full">{book.author_name}</h4>
          <div className="flex w-full gap-1">
            <p>{book.first_publish_year}</p>
            <p>{book.want_to_read_count}</p>
            <p>{book.number_of_pages_median}</p>
            <p>{book.ebook_access}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
