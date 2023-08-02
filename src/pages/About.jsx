import Form from "../components/Form";

export default function About() {
  return (
    <div className="w-10/12 mx-auto mt-2 grid sm:grid-cols-2 gap-20 rounded-2xl bg-bg02 border-2 border-border01 px-10">
      <div className="text-grayish01">
        <h2 className="text-2xl my-10 font-semibold">About</h2>
        <div className="space-y-2">
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
      <div className="h-min w-min mx-auto px-10 pb-20 bg-bg01 rounded-xl shadow-lg my-10">
        <Form />
      </div>
    </div>
  );
}
