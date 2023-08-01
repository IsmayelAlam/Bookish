import BookList from "../components/BookList";
import useBookmark from "../hooks/useBookmark";

export default function Bookmark() {
  const [books, setBooks] = useBookmark([], "books");

  console.log(books);

  return (
    <div className="w-10/12 mx-auto">
      <BookList books={books} />
    </div>
  );
}
