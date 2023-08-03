import Form from "../components/Form";

export default function About() {
  return (
    <div className="w-screen sm:w-10/12 sm:mx-auto sm:mt-2 grid xl:grid-cols-2 sm:gap-20 sm:rounded-2xl bg-bg02 sm:border-2 border-border01 sm:px-10">
      <div className="text-grayish01 w-fit px-2">
        <h2 className="text-2xl my-10 font-semibold">About</h2>
        <div className="space-y-2 text-sm sm:text-base">
          <p className="first-letter:text-xl first-letter:font-bold">
            Get all your favorite books in one place. Read them online or get a
            paperback copy from Amazon, bookmark you &quot;To be read&quot; and
            many more awesome features, all in one website.
          </p>
          <p>
            Hi, I&apos;m Ismayel Alam and this is my demo project. I love
            reading books and wanted to create something with my web development
            skills to others. I did the front end part only and get the data
            base from OpenLibrary, the best free api for book, with other 30
            millions copies in different languages. You can search for authors
            along with books and get their works details and small introduction.
          </p>
          <p>
            OpenLibrary is great but there is some inconsistently in database.
            So some books don&apos;t show all details.
          </p>
          <p>
            Would love to get some feedback and if you would want to see any new
            features added, let me know through the form.
          </p>
          <p>Happy reading!</p>
        </div>
      </div>
      <div className="h-min w-full lg:w-max sm:mx-auto lg:px-10 pb-20 bg-bg01 sm:rounded-xl shadow-lg my-10 overflow-hidden">
        <Form />
      </div>
    </div>
  );
}
