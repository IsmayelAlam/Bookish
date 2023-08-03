import BookList from "../components/BookList";
import useBookmark from "../hooks/useBookmark";

export default function Bookmark() {
  const [books] = useBookmark([], "books");

  return (
    <div className="lg:w-10/12 w-fit pb-10 mx-auto">
      <BookList books={books} />
    </div>
  );
}
