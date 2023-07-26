import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import useSearchApi from "../hooks/useSearchApi";

export default function Search() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");

  // const author = useSearchApi("j k rowling", true);
  const books = useSearchApi(title);

  console.log(books);

  return (
    <div className="w-10/12 mx-auto">
      <SearchBar />
    </div>
  );
}
