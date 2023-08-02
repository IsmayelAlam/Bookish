import { useState } from "react";
import BookCard from "../ui/BookCard";

export default function BookList({ books, found, query }) {
  const [freeBook, setFreeBooks] = useState(false);

  let filterBooks = books;

  if (freeBook)
    filterBooks = books?.filter((book) => book.lending_identifier_s);

  return (
    <>
      <div className="flex justify-between items-center">
        <p>
          found {found} books for {query}
        </p>
        <div className="space-x-5">
          <button onClick={setFreeBooks.bind(null, false)}>all</button>
          <button onClick={setFreeBooks.bind(null, true)}>free</button>
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {filterBooks?.map((book) => (
          <BookCard key={book.edition_key?.[0]} book={book} />
        ))}
      </ul>
    </>
  );
}
