import BookList from "../components/BookList";
import useBookmark from "../hooks/useBookmark";

export default function Bookmark() {
  const [books, setBooks] = useBookmark([], "books");

  return (
    <div className="w-10/12 mx-auto">
      <BookList books={books} />
    </div>
  );
}
