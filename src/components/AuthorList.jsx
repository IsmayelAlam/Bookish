import AuthorCard from "../ui/AuthorCard";

export default function AuthorList({ authors }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-6 gap-5">
      {authors?.docs.map((author) => (
        <AuthorCard key={author.key} author={author} />
      ))}
    </ul>
  );
}
