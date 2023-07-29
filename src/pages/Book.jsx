import { useParams } from "react-router-dom";
import useGetBook, { useGetBookWork } from "../hooks/useGetBook";

export default function Book() {
  const { id } = useParams();

  const [work, edition] = id.split("_");

  const bookData = useGetBook(edition);

  const bookWorkData = useGetBookWork(work);

  const allData = { ...bookData.data, ...bookWorkData.data };

  const description = allData?.description?.value || allData?.description;

  console.log(allData);

  const cover = `https://covers.openlibrary.org/b/id/${allData?.covers?.[0]}-L.jpg`;

  return (
    <div>
      <img src={cover} alt="" className="h-96" />
      <p>{description}</p>
    </div>
  );
}
