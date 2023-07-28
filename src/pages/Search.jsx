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

  if (isLoading) return <p>loading</p>;

  return (
    <div className="w-10/12 mx-auto">
      <SearchBar />
      <BookList books={books} />
    </div>
  );
}
