import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import useSearchApi from "../hooks/useSearch";
import BookList from "../components/BookList";
import AuthorList from "../components/AuthorList";

export default function Search() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const author = searchParams.get("author");
  const page = searchParams.get("page") || 1;

  const { data, isLoading, error } = useSearchApi(
    title || author,
    Boolean(author),
    page
  );

  let content = {};

  // console.log(data);

  if (title)
    content = (
      <BookList books={data?.docs} found={data?.numFound} query={data?.q} />
    );
  if (author) content = <AuthorList authors={data.docs} />;

  return (
    <div className="px-40 pb-20 space-y-10 bg-yellow-100">
      <SearchBar />
      {isLoading ? <p>loading</p> : content}
    </div>
  );
}
