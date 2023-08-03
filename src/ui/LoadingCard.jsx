export default function LoadingCard({ count, author = false }) {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 py-10 w-full">
      {[...Array(count).keys()].map((book) => (
        <li key={book} className="w-full h-96 flex items-center justify-start">
          {author || (
            <div className="rounded-lg z-10 bg-gray-500 shadow-md w-48 h-72 animate-pulse " />
          )}
          <div
            className={`bg-gray-500/50 border-gray-400/50 w-64 border-2 shadow-lg rounded-xl h-full flex justify-between items-center flex-col py-5 p-1 mx-2 ${
              author || "-ml-14 pl-14"
            }`}
          >
            <div
              className={`w-40 mx-auto bg-slate-300/50 animate-pulse rounded-lg ${
                author ? "h-44" : "h-20"
              }`}
            />
            <div className="space-y-2">
              {author || (
                <div className="w-40 mx-auto h-10 bg-slate-300/50 animate-pulse rounded-lg" />
              )}
              <div className="w-40 mx-auto h-10 bg-slate-300/50 animate-pulse rounded-lg" />
              <div className="w-40 mx-auto h-10 bg-slate-300/50 animate-pulse rounded-lg" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
