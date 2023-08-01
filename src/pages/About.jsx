export default function About() {
  return (
    <div className="w-10/12 mx-auto mt-2 grid grid-cols-2 gap-20">
      <div className="p-5 space-y-5 w-5/6">
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
      <div>
        <h3 className="text-2xl my-10 font-semibold">Form</h3>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col items-start gap-4"
        >
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_EmailAccessKey}
          />

          <label htmlFor="name">
            <p>Name</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>

          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>

          <label htmlFor="message">
            <p>Message</p>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here..."
            ></textarea>
          </label>

          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
