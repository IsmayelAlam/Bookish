import { useQuery } from "@tanstack/react-query";
import { getAuthors } from "../API/openLibrary";

export function useGetAuthors(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["author", id],
    queryFn: () => getAuthors(id),
  });

  return { data, isLoading, error };
}
