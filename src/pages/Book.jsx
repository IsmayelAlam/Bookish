import { useParams } from "react-router-dom";
import useGetBook from "../hooks/useGetBook";

export default function Book() {
  const { id } = useParams();

  // const imgs = useGetCover(id, "S");
  const bookData = useGetBook(id);
  console.log(bookData);

  const cover = `https://covers.openlibrary.org/b/olid/${id}-L.jpg`;

  return (
    <div>
      <img src={cover} alt="" />
    </div>
  );
}
