import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();

  // const imgs = useGetCover(id, "S");

  const imgs = `https://covers.openlibrary.org/b/olid/${id}-M.jpg`;

  console.log(id, imgs);
  return (
    <div>
      <img src={`https://covers.openlibrary.org/b/olid/${id}-M.jpg`} alt="" />
    </div>
  );
}
