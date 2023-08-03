import AuthorCard from "../ui/AuthorCard";

export default function AuthorList({ authors }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-5 py-10 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {authors.map((author) => (
        <AuthorCard key={author.key} author={author} />
      ))}
    </ul>
  );
}
