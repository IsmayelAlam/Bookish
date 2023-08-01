import { useParams } from "react-router-dom";

import { BiGlobe } from "react-icons/bi";
import {
  AiOutlineCreditCard,
  AiOutlineFileDone,
  AiOutlineStar,
} from "react-icons/ai";
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
import MiniDetailCards from "../ui/MiniDetailCards";
import { useGetAuthors } from "../hooks/useGetAuthors";

export default function Book() {
  const { id } = useParams();
  const [work, edition, isbn10, iaIdentity] = id.split("_");

  const bookData = useGetBookEdition(edition);
  const bookWorkData = useGetBookWork(work);
  const bookWorkEdition = useBookWorkEdition(work);
  const bookshelves = useBookBookshelves(work);
  const bookRating = useBookRatings(work);

  const allData = { ...bookData.data, ...bookWorkData.data };

  const authorId = allData.authors
    ?.map((author) => author.author?.key)?.[0]
    ?.split("/")
    .at(-1);

  const author = useGetAuthors(authorId);

  const description = allData?.description?.value || allData?.description;

  const cover = `https://covers.openlibrary.org/b/id/${allData?.covers?.[0]}-L.jpg`;

  function handleBookmark(e) {
    e.preventDefault();
  }

  console.log(allData, author.data);

  return (
    <div className="px-40 py-14 grid grid-cols-[1fr,3fr,1fr] min-h-screen gap-5">
      <div className="w-full min-w-max h-full flex items-center flex-col gap-5">
        <img src={cover} alt="" className="w-64 mb-10 rounded-lg" />
        <ButtonLink
          link={
            iaIdentity &&
            `https://archive.org/details/${iaIdentity}/?view=theater`
          }
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

      <div className="flex flex-col items-start gap-16">
        <div className="space-y-2">
          <h2 className="text-5xl">{allData.title}</h2>
          <div className="flex items-center gap-1 text-lg">
            <AiOutlineStar />
            <p>{bookRating?.data?.summary.average?.toFixed(2)}</p>
            <span className="text-sm">({bookRating?.data?.summary.count})</span>
          </div>
          <p>Page number {allData.number_of_pages || 0}</p>
          <p>Publish on {allData.publish_date || 0}</p>
          <p>publishers: {allData.publishers || "-"}</p>
        </div>

        <div className="flex capitalize gap-4 my-5">
          <MiniDetailCards
            text={`${bookshelves?.data?.counts.already_read || 0} already read`}
            icon={<AiOutlineFileDone />}
          />
          <MiniDetailCards
            text={`${
              bookshelves?.data?.counts.currently_reading || 0
            } currently reading`}
            icon={<AiOutlineFileDone />}
          />
          <MiniDetailCards
            text={`${bookshelves?.data?.counts.want_to_read || 0} want to read`}
            icon={<AiOutlineFileDone />}
          />
          <MiniDetailCards
            text={`${bookWorkEdition?.data?.entries.length || 0} editions`}
            icon={<AiOutlineCreditCard />}
            onClick={handleBookmark}
          />
        </div>

        <div className="flex flex-wrap my-5 gap-2">
          <span>Subjects: </span>
          {allData.subjects
            ?.filter((subject) => !subject.includes(" "))
            .map((subject) => (
              <p key={subject} className="bg-white rounded-full py-1 px-2">
                {subject}
              </p>
            ))}
        </div>

        <p>{description}</p>
      </div>

      <div className="w-max h-max flex flex-col items-center px-5">
        <img
          src={`https://covers.openlibrary.org/a/olid/${authorId}-M.jpg`}
          alt={`image of author ${author.data?.name}`}
          className="rounded-lg"
        />
        <h3 className="w-full text-center text-lg font-semibold mt-5">
          {author.data?.name}
        </h3>
        <p>The Author</p>
      </div>
    </div>
  );
}
