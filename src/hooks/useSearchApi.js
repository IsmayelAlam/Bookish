import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../API/openLibrary";

export default function useSearchApi(title, author) {
  const { data } = useQuery({
    queryKey: ["search"],
    queryFn: () => searchApi(title, author),
  });

  return data;
}
