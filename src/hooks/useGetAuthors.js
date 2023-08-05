import { useQuery } from "@tanstack/react-query";
import { getAuthorWork, getAuthors } from "../API/openLibrary";

export function useGetAuthors(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["author", id],
    queryFn: () => (id ? getAuthors(id) : null),
  });

  return { data, isLoading, error };
}
export function useGetAuthorWork(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["authorWork", id],
    queryFn: () => getAuthorWork(id),
  });

  return { data, isLoading, error };
}
