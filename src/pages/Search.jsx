import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import useSearchApi from "../hooks/useSearch";
import BookList from "../components/BookList";

export default function Search() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const author = searchParams.get("author");
  const page = searchParams.get("page") || 1;

  const {
    data: books,
    isLoading,
    error,
  } = useSearchApi(title || author, Boolean(author), page);

  // const filteredBooks = books.filter((book) => book.cover_i);

  return (
    <div className="px-40 space-y-10 bg-yellow-100">
      <SearchBar />
      {isLoading ? <p>loading</p> : <BookList books={books} />}
    </div>
  );
}
