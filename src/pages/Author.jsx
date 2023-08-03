import { Link, useParams } from "react-router-dom";
import { useGetAuthorWork, useGetAuthors } from "../hooks/useGetAuthors";
import avatar from "../assets/avatar.png";

export default function Author() {
  const { id } = useParams();

  const author = useGetAuthors(id);
  const authorWorks = useGetAuthorWork(id);

  const data = { ...authorWorks.data, ...author.data };

  const isLoading = authorWorks.isLoading;

  return (
    <div className="w-10/12 mx-auto my-10 grid grid-cols-1 lg:grid-cols-[1fr,4fr] gap-10">
      <div className="flex flex-col gap-2 items-center text-color01">
        <div className="h-96 w-72 rounded-lg overflow-hidden relative">
          <img
            src={avatar}
            alt={`portrait of ${author.name}`}
            className="h-full w-full mx-auto absolute top-0 left-0 z-0"
          />
          <img
            src={`https://covers.openlibrary.org/a/olid/${id}-L.jpg`}
            alt={`portrait of ${author.name}`}
            className="h-full w-full mx-auto z-10 absolute top-0 left-0"
          />
        </div>
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <p>{data.birth_date}</p>
        <p>{data?.bio?.value || data?.bio}</p>
      </div>

      {/* <div className="grid gap-y-5 gap-x-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 pb-10 text-color01"> */}
      {isLoading ? (
        ""
      ) : (
        <div className="flex flex-wrap gap-5 justify-center text-color01 font-semibold">
          {data?.entries?.map((work) => (
            <Link to={`/search?title=${work.title}&page=1`} key={work.key}>
              <div className="p-2 w-52 h-96 bg-bg02 border-2 border-border02 text-center flex flex-col items-center rounded-lg shadow space-y-2">
                <img
                  src={`https://covers.openlibrary.org/b/id/${work.covers?.[0]}-M.jpg`}
                  alt={`cover of ${work.title}`}
                  className="h-64"
                />
                <h3>{work.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
