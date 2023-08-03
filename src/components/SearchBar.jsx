import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("title");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = `${[selection]}=${input}&page=1`;
    navigate({ pathname: "/search", search: params });
    setInput("");
  };

  return (
    <>
      <form
        className="sm:mx-auto sm:px-10 mx-2 px-2 flex rounded-full sm:rounded sm:gap-2 items-center bg-bg02 justify-between font-semibold text-grayish01"
        onSubmit={handleSubmit}
      >
        <select
          className="focus:outline-none capitalize bg-transparent"
          value={selection}
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="author">author</option>
        </select>
        <input
          className="bg-transparent h-10 border-b-2 border-border02 valid:border-green-300 focus:outline-none w-max grow font-normal"
          required
          placeholder="Search for you favorite books and authors..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          type="submit"
          className="px-5 py-2 uppercase text-color01 font-semibold"
        >
          <span className="hidden sm:block">Search</span>
          <AiOutlineSearch className="block sm:hidden h-7 w-7 px-0.5" />
        </button>
      </form>
    </>
  );
}
