export default function About() {
  return (
    <div className="w-10/12 mx-auto mt-2 grid grid-cols-2 gap-5">
      <div className="p-5 space-y-5">
        <h2 className="text-2xl my-10 font-semibold">About</h2>
        <p className="first-letter:text-xl">
          Get all your favorite books in one place. Read them online or get a
          paperback copy from Amazon, bookmark you &quot;To be read&quot; and
          many more awesome features, all in one website.
        </p>
        <p>
          Hi, I&apos;m Ismayel Alam and this is my demo project. I love reading
          books and wanted to create something with my web development skills to
          others. I did the front end part only and get the data base from
          OpenLibrary, the best free api for book, with other 30 millions copies
          in different languages. You can search for authors along with books
          and get their works details and small introduction.
        </p>
        <p>
          OpenLibrary is great but there is some inconsistently in database. So
          some books don&apos;t show all details.
        </p>
        <p>
          Would love to get some feedback and if you would want to see any new
          features added, let me know through the form.
        </p>
        <p>Happy reading!</p>
      </div>
    </div>
  );
}
