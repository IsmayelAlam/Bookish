import { useParams } from "react-router-dom";
import useGetBook, { useGetBookWork } from "../hooks/useGetBook";

export default function Book() {
  const { id } = useParams();

  // const bookData = useGetBook(id);

  // const bookWorkData = useGetBookWork(bookData?.data?.works[0].key);

  // console.log(bookWorkData);
  // console.log(`https://openlibrary.org${bookData?.data?.works[0].key}.json`);

  const cover = `https://covers.openlibrary.org/b/isbn/${id}-L.jpg`;

  return (
    <div>
      <img src={cover} alt="" />
    </div>
  );
}
