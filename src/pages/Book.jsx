import { useParams } from "react-router-dom";
import { BiGlobe } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { IoLogoAmazon } from "react-icons/io5";
import { TbBan } from "react-icons/tb";
import {
  useBookBookshelves,
  useBookRatings,
  useBookWorkEdition,
  useGetBookEdition,
  useGetBookWork,
} from "../hooks/useGetBook";
import ButtonLink from "../ui/Button";

export default function Book() {
  const { id } = useParams();

  const [work, edition, isbn10, iaIdentity] = id.split("_");

  const bookData = useGetBookEdition(edition);
  const bookWorkData = useGetBookWork(work);
  const bookWorkEdition = useBookWorkEdition(work);
  const bookshelves = useBookBookshelves(work);
  const bookRating = useBookRatings(work);

  const allData = { ...bookData.data, ...bookWorkData.data };

  const description = allData?.description?.value || allData?.description;

  const cover = `https://covers.openlibrary.org/b/id/${allData?.covers?.[0]}-L.jpg`;

  return (
    <div className="px-40 py-14 grid grid-cols-[1fr,3fr,1fr] min-h-screen gap-5">
      <div className="w-full h-full flex items-center flex-col gap-5 rounded-2xl">
        <img src={cover} alt="" className="h-96 mb-10 rounded-lg" />
        <ButtonLink
          link={iaIdentity && `https://archive.org/details/${iaIdentity}`}
          icon={iaIdentity ? <BiGlobe /> : <TbBan />}
          text={iaIdentity ? "read online" : "no online copy available"}
        />
        <ButtonLink
          link={`https://www.amazon.com/gp/product/${isbn10}`}
          icon={<IoLogoAmazon />}
          text={"buy paperback"}
        />
        <ButtonLink
          link={`/bookmark`}
          icon={<BsBookmarks />}
          text={"bookmark"}
        />
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
