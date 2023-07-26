import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        className="w-full mx-auto my-2 px-10 flex gap-2 items-center justify-between rounded-full bg-slate-500 font-semibold"
        onSubmit={handleSubmit}
      >
        <select
          className="w-24 h-10 bg-transparent focus:outline-none uppercase"
          value={selection}
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="author">author</option>
        </select>
        <input
          className="bg-transparent h-10 border-b-2 border-blue-300 valid:border-green-300 focus:outline-none w-max grow font-normal"
          required
          placeholder="Search for you favorite books and authors..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
