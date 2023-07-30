import { useQuery } from "@tanstack/react-query";
import {
  getBookBookshelves,
  getBookE,
  getBookRatings,
  getBookW,
  getBookWorkEdition,
} from "../API/openLibrary";

export function useGetBookEdition(id) {
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

export function useBookWorkEdition(workId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["WorkEdition", workId],
    queryFn: () => getBookWorkEdition(workId),
  });

  return { data, isLoading, error };
}

export function useBookRatings(workId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["BookRatings", workId],
    queryFn: () => getBookRatings(workId),
  });

  return { data, isLoading, error };
}

export function useBookBookshelves(workId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Bookshelves", workId],
    queryFn: () => getBookBookshelves(workId),
  });

  return { data, isLoading, error };
}
