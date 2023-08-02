export default function Form() {
  const inputClass =
    "bg-bg02 resize-none rounded-full w-96 px-5 py-1 mb-5 border-2 border-border01 focus:border-border02 focus:outline-none text-color01";

  return (
    <>
      <h3 className="text-2xl mb-10 py-7 px-5 font-semibold text-grayish01 bg-accent02 rounded-b-xl shadow">
        Form
      </h3>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col items-center justify-between gap-4 text-color01 w-full h-full"
      >
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env.VITE_EmailAccessKey}
        />

        <label htmlFor="name" className="space-y-2">
          <p>Name</p>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className={inputClass}
          />
        </label>

        <label htmlFor="email" className="space-y-2">
          <p>Email</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className={inputClass}
          />
        </label>

        <label htmlFor="message" className="space-y-2">
          <p>Message</p>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here..."
            className={`${inputClass} rounded-lg h-48`}
          ></textarea>
        </label>

        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />

        <button
          type="submit"
          className={`${inputClass} uppercase text-gray-600 font-bold bg-accent01`}
        >
          submit
        </button>
      </form>
    </>
  );
}
