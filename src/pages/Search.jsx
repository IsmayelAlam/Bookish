import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import useSearchApi from "../hooks/useSearch";
import BookList from "../components/BookList";
import AuthorList from "../components/AuthorList";
import LoadingCard from "../ui/LoadingCard";

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

  if (title)
    content = (
      <BookList books={data?.docs} found={data?.numFound} query={data?.q} />
    );
  if (author) content = <AuthorList authors={data?.docs} />;

  if (error)
    content = (
      <p className="text-lg text-center text-color01 py-5">
        Failed to search at the moment, please try again later
      </p>
    );

  return (
    <div className="lg:w-10/12 pb-10 w-full mx-auto bg-bg01">
      <div className="sm:pt-0 pt-10 w-full">
        <SearchBar />
      </div>
      <div className="px-2 w-fit mx-auto">
        {isLoading ? (
          <LoadingCard count={8} author={Boolean(author)} />
        ) : (
          content
        )}
      </div>
    </div>
  );
}
