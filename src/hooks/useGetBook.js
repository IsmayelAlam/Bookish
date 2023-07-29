import { useQuery } from "@tanstack/react-query";
import { getBookE, getBookW } from "../API/openLibrary";

export default function useGetBookEdition(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["book", id],
    queryFn: () => getBookE(id),
  });

  return { data, isLoading, error };
}

export function useGetBookWork(workId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["book", workId],
    queryFn: () => getBookW(workId),
  });

  return { data, isLoading, error };
}
