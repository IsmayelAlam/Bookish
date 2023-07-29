import BookCard from "../ui/BookCard";

export default function BookList({ books }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-4 gap-10">
      {books?.docs
        .filter((book) => book.cover_i)
        .map((book) => (
          <BookCard key={book.edition_key[0]} book={book} />
        ))}
    </ul>
  );
}
