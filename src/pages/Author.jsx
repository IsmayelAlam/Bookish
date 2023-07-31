import { useParams } from "react-router-dom";
import { useGetAuthorWork, useGetAuthors } from "../hooks/useGetAuthors";

export default function Author() {
  const { id } = useParams();

  const author = useGetAuthors(id);
  const authorWorks = useGetAuthorWork(id);

  const data = { ...authorWorks.data, ...author.data };

  // console.log(data);

  return (
    <div className="w-10/12 mx-auto my-10 grid grid-cols-[1fr,4fr] gap-10">
      <div className="space-y-2">
        <img
          src={`https://covers.openlibrary.org/a/olid/${id}-L.jpg`}
          alt={`image of ${data.name}`}
        />
        <h2>{data.name}</h2>
        <p>{data.birth_date}</p>
        {/* {data?.links?.map((link) => (
          <a key={link.title} href={link.url} className="block">
            {link.title}
          </a>
        ))} */}
        <p>bio</p>
        <p>{data?.bio?.value || data?.bio}</p>
      </div>

      <div className="grid grid-cols-4 gap-y-5 gap-x-10">
        {data?.entries?.map((work) => (
          <div
            key={work.key}
            className="py-5 bg-white text-center flex flex-col items-center rounded-lg shadow"
          >
            <img
              src={`https://covers.openlibrary.org/b/id/${work.covers?.[0]}-M.jpg`}
              alt={`cover of ${work.title}`}
              className="h-64"
            />
            <h3>{work.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
