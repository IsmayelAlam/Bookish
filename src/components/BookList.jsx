export default function BookList({ books }) {
  console.log(books?.docs);
  return (
    <ul>
      {books?.docs.map((book) => (
        <li key={book.edition_key[0]}>{book.title}</li>
      ))}
    </ul>
  );
}
