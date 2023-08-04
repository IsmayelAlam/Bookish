import { GiBookmarklet } from "react-icons/gi";

export default function LoadingBook() {
  return (
    <div className="text-grayish01/50 w-screen flex justify-center items-center h-[80vh]">
      <GiBookmarklet className="w-80 h-80 animate-pulse" />
    </div>
  );
}
