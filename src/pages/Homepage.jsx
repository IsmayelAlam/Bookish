import SearchBar from "../components/SearchBar";
import useGetQuotes from "../hooks/useGetQuotes";

export default function Homepage() {
  const { data: quote, isLoading } = useGetQuotes();

  return (
    <div className="lg:w-10/12 lg:mx-auto bg-bg01">
      <div className="py-10">
        <SearchBar />
      </div>

      {isLoading || (
        <div className="sm:py-52 px-5 py-20 sm:w-fit text-grayish01 sm:mx-auto space-y-5 z-50">
          <q className="text-center sm:text-3xl text-xl text-color01 italic">
            {quote?.[0].quote}
          </q>
          <p className="text-end">
            &mdash;
            {quote?.[0].author}
          </p>
        </div>
      )}
    </div>
  );
}
