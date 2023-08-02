import SearchBar from "../components/SearchBar";
import useGetQuotes from "../hooks/useGetQuotes";

export default function Homepage() {
  const { data: quote } = useGetQuotes();
  console.log(quote);

  return (
    <div className="px-40 bg-yellow-100">
      <SearchBar />
      <p>{quote?.[0].quote}</p>
    </div>
  );
}
