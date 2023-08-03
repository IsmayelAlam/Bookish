import { useState } from "react";
import BookCard from "../ui/BookCard";
import { useSearchParams } from "react-router-dom";

export default function BookList({ books, found, query }) {
  const [freeBook, setFreeBooks] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const curPage = Number(searchParams.get("page"));

  let filterBooks = books;

  const handleNextPage = () => {
    const title = searchParams.get("title");

    if (curPage < found / 100) setSearchParams({ title, page: curPage + 1 });
  };

  const handlePrevPage = () => {
    const title = searchParams.get("title");

    if (curPage > 1) setSearchParams({ title, page: curPage - 1 });
  };

  if (freeBook)
    filterBooks = books?.filter((book) => book.lending_identifier_s);

  const detailBar = (
    <div className="flex justify-between gap-1 w-full items-center my-5 text-color01 py-1 rounded-lg">
      <p className="hidden md:block space-x-5 border-2 border-border02 py-1 px-2 rounded-lg capitalize">
        found {found} books for {query}
      </p>
      {found / 100 > 1 && (
        <div className="space-x-5 flex border-2 border-border02 py-1 px-2 rounded-lg">
          <button
            onClick={handlePrevPage}
            className={`px-1 sm:px-2 uppercase font-semibold sm:text-base text-sm bg-color01 text-color02 rounded-md`}
          >
            previous
          </button>
          <p
            className={`px-1 sm:px-2 uppercase font-semibold sm:text-base text-sm bg-color01 text-color02 rounded-md`}
          >
            {curPage}
          </p>
          <button
            onClick={handleNextPage}
            className={`px-1 sm:px-2 uppercase font-semibold sm:text-base text-sm bg-color01 text-color02 rounded-md`}
          >
            next
          </button>
        </div>
      )}
      <div className="space-x-5 border-2 border-border02 py-1 px-2 rounded-lg">
        <button
          onClick={setFreeBooks.bind(null, false)}
          className={`px-1 sm:px-2 uppercase font-semibold sm:text-base text-sm ${
            freeBook || "bg-color01 text-color02 rounded-md"
          }`}
        >
          all
        </button>
        <button
          onClick={setFreeBooks.bind(null, true)}
          className={`px-1 sm:px-2 uppercase font-semibold sm:text-base text-sm ${
            !freeBook || "bg-color01 text-color02 rounded-md"
          }`}
        >
          free
        </button>
      </div>
    </div>
  );

  return (
    <>
      {detailBar}
      <ul className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 py-10">
        {filterBooks?.map((book) => (
          <BookCard key={book.edition_key?.[0]} book={book} />
        ))}
      </ul>
      {found / 100 > 1 && detailBar}
    </>
  );
}
