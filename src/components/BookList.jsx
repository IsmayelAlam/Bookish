import BookCard from "../ui/BookCard";

export default function BookList({ books }) {
  console.log(books);
  return (
    <ul className="grid grid-cols-4 gap-5">
      {books?.docs.map((book) => (
        <BookCard key={book.edition_key[0]} book={book} />
      ))}
    </ul>
  );
}
