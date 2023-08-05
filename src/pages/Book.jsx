import { Link, useParams } from "react-router-dom";

import { BiGlobe } from "react-icons/bi";
import {
  AiFillStar,
  AiOutlineCreditCard,
  AiOutlineFileDone,
} from "react-icons/ai";
import { TbBookmarks, TbBookmarksOff } from "react-icons/tb";
import { IoLogoAmazon } from "react-icons/io5";
import { TbBan } from "react-icons/tb";

import {
  useBookBookshelves,
  useBookRatings,
  useBookWorkEdition,
  useGetBookEdition,
  useGetBookWork,
} from "../hooks/useGetBook";
import MiniDetailCards from "../ui/MiniDetailCards";
import { useGetAuthors } from "../hooks/useGetAuthors";
import useBookmark from "../hooks/useBookmark";
import ButtonLink from "../ui/ButtonLink";
import cover from "../assets/book_cover.jpg";
import avatar from "../assets/avatar.png";
import LoadingBook from "../ui/LoadingBook";

export default function Book() {
  const { id } = useParams();
  const [work, edition, isbn10, iaIdentity] = id.split("_");

  const bookData = useGetBookEdition(edition);
  const bookWorkData = useGetBookWork(work);
  const bookWorkEdition = useBookWorkEdition(work);
  const bookshelves = useBookBookshelves(work);
  const bookRating = useBookRatings(work);

  const allData = { ...bookData.data, ...bookWorkData.data };

  const authorId = allData?.authors
    ?.map((author) => author.author?.key)?.[0]
    ?.split("/")
    .at(-1);

  const author = useGetAuthors(authorId);

  const description = allData?.description?.value || allData?.description;

  const bookCover = allData?.covers?.[0]
    ? `https://covers.openlibrary.org/b/id/${allData?.covers?.[0]}-L.jpg`
    : cover;

  const [bookmarks, setBookmarks] = useBookmark([], "books");

  const isBookmarked = bookmarks.find(
    (book) => book.edition_key[0] === edition
  );

  function handleBookmark(e) {
    e.preventDefault();

    if (bookmarks.find((book) => book.edition_key[0] === edition)) {
      setBookmarks((books) => [
        ...books.filter((book) => book.edition_key[0] !== edition),
      ]);
    } else {
      const bookmark = {
        title: allData.title,
        author_name: [author.data.name],
        first_publish_year: allData.publish_date,
        number_of_pages_median: allData.number_of_pages,
        want_to_read_count: bookshelves.data.counts.want_to_read,
        lending_identifier_s: iaIdentity,
        cover_i: allData.covers?.[0] || null,
        key: `/works/${work}`,
        isbn: [isbn10],
        edition_key: [edition],
      };

      setBookmarks((books) => [...books, bookmark]);
    }
  }

  if (
    bookData.isLoading ||
    bookWorkData.isLoading ||
    bookWorkEdition.isLoading ||
    bookshelves.isLoading ||
    bookRating.isLoading
  )
    return <LoadingBook />;

  return (
    <div className="md:w-10/12 py-14 grid grid-cols-1 xl:grid-cols-[1fr,4fr] justify-center lg:gap-5 text-grayish01 mx-auto">
      <div className="w-full px-2 min-w-max h-min flex justify-eve xl:flex-col gap-2 sm:gap-5">
        <img
          src={bookCover}
          alt={`cover of ${allData.title}`}
          className="w-40 xl:w-64 mb-10 rounded-lg mx-auto"
        />
        <div className="text-center w-44 sm:w-64 space-y-3 text-sm mx-auto">
          <ButtonLink
            link={
              iaIdentity &&
              `https://archive.org/details/${iaIdentity}/?view=theater`
            }
            icon={iaIdentity ? <BiGlobe /> : <TbBan />}
            text={iaIdentity ? "read online" : "not available"}
            onClick={!iaIdentity ? (e) => e.preventDefault() : null}
          />
          <ButtonLink
            link={`https://www.amazon.com/gp/product/${isbn10}`}
            icon={<IoLogoAmazon />}
            text={"buy paperback"}
          />
          <ButtonLink
            link={`/bookmark`}
            icon={isBookmarked ? <TbBookmarksOff /> : <TbBookmarks />}
            text={isBookmarked ? "unBookmark" : "bookmark"}
            onClick={handleBookmark}
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-5 px-2">
        <div className="space-y-2">
          <h2 className="lg:text-6xl text-4xl text-color01 font-semibold">
            {allData.title}
          </h2>
          <div
            className={
              bookRating?.data?.summary.average
                ? "flex items-center gap-1 text-lg"
                : "hidden"
            }
          >
            <AiFillStar className="w-5 h-5 text-yellow-400" />
            <p>{bookRating?.data?.summary.average?.toFixed(2)}/5</p>
          </div>

          <div className="flex gap-2 py-5">
            <div className="w-12 h-16 rounded-lg overflow-hidden relative">
              <img
                src={avatar}
                alt={`portrait of `}
                className="h-full w-full mx-auto absolute top-0 left-0 z-0"
              />
              <img
                src={`https://covers.openlibrary.org/a/olid/${authorId}-S.jpg`}
                alt={`image of author ${author.data?.name}`}
                className="h-full w-full mx-auto absolute top-0 left-0 z-0"
              />
            </div>

            <div>
              <h3 className="text-center font-semibold">{author.data?.name}</h3>
              <p>Author</p>
            </div>
          </div>

          <p className={allData.number_of_pages || "hidden"}>
            Page number: {allData.number_of_pages}
          </p>
          <p className={allData.publish_date || "hidden"}>
            Publish on: {allData.publish_date}
          </p>
          <p className={allData.publishers || "hidden"}>
            publishers: {allData.publishers}
          </p>
        </div>

        <hr />

        <div className="flex flex-wrap justify-center capitalize gap-4">
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
          />
        </div>

        <div
          className={
            allData.subjects ? "flex flex-wrap items-center gap-2" : "hidden"
          }
        >
          {allData.subjects
            ?.filter((subject) => !subject.includes(" "))
            .map((subject) => (
              <Link
                key={subject}
                to={{ pathname: "/search", search: `title=${subject}` }}
              >
                <p className="border border-border01 font-semibold rounded-full py-1 px-3">
                  {subject}
                </p>
              </Link>
            ))}
        </div>

        <div className={description ? "space-y-3 lg:pr-20" : "hidden"}>
          <p className="text-lg">Description:</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
