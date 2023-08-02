import { useState } from "react";
import BookCard from "../ui/BookCard";
import ButtonLink from "../ui/ButtonLink";
import { useSearchParams } from "react-router-dom";

export default function BookList({ books, found, query }) {
  const [freeBook, setFreeBooks] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  let filterBooks = books;
  console.log();

  const handleNextPage = (e) => {
    const curPage = Number(searchParams.get("page"));
    const title = searchParams.get("title");

    console.log(title);

    setSearchParams({ title, page: curPage + 1 });
  };
  const handlePrevPage = (e) => {
    const curPage = Number(searchParams.get("page"));
    const title = searchParams.get("title");

    console.log(title);

    setSearchParams({ title, page: curPage - 1 });
  };

  if (freeBook)
    filterBooks = books?.filter((book) => book.lending_identifier_s);

  return (
    <>
      <div className="flex justify-between items-center">
        <p>
          found {found} books for {query}
        </p>
        <div className="space-x-5">
          <button onClick={handlePrevPage}>previous</button>
          <button onClick={handleNextPage}>next</button>
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
