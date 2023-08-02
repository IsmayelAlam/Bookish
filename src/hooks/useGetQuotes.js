import { useQuery } from "@tanstack/react-query";
import { getQuotes } from "../API/ninjaApi";

export default function useGetQuotes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["quotes"],
    keepPreviousData: true,
    queryFn: getQuotes,
  });

  return { data, isLoading, error };
}
