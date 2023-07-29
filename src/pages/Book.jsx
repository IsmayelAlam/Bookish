import { useParams } from "react-router-dom";
import { useGetBookEdition, useGetBookWork } from "../hooks/useGetBook";

export default function Book() {
  const { id } = useParams();

  const [work, edition, isbn10] = id.split("_");

  const bookData = useGetBookEdition(edition);

  const bookWorkData = useGetBookWork(work);

  const allData = { ...bookData.data, ...bookWorkData.data };

  const description = allData?.description?.value || allData?.description;

  console.log(allData);

  const cover = `https://covers.openlibrary.org/b/id/${allData?.covers?.[0]}-L.jpg`;

  return (
    <div className="px-40 py-14 grid grid-cols-[1fr,3fr,1fr] min-h-screen">
      <div className="w-full">
        <img src={cover} alt="" className="h-96" />
      </div>
      <div>
        <h2>{allData.title}</h2>
        <p>{allData.number_of_pages}</p>
        <p>{allData.publish_date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
