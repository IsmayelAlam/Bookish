import { useEffect, useState } from "react";

export default function useBookmark(initialState, key) {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialState
  );

  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [value, key]
  );

  return [value, setValue];
}
