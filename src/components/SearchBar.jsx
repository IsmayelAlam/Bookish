export default function SearchBar() {
  return (
    <input
      className="w-10/12 mx-auto bg-transparent shadow-xl h-5 my-2 p-5 block border-b-2 border-blue-300 valid:border-green-300 focus:outline-none"
      required
      placeholder="Search for you favorite books and authors..."
    />
  );
}
