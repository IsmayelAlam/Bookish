import { useQuery } from "@tanstack/react-query";
import { getBook } from "../API/openLibrary";

export default function useGetBook(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["book", id],
    queryFn: () => getBook(id),
  });

  return { data, isLoading, error };
}
