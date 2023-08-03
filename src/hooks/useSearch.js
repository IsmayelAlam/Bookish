import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../API/openLibrary";

export default function useSearch(title, author, page) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["search", title, author, page],
    queryFn: () => searchApi(title, author, page),
  });

  return { data, isLoading, error };
}
