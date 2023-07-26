export async function searchApi(title, author = false) {
  const data = await fetch(
    `https://openlibrary.org/search${author ? "/authors" : ""}.json?q=${title}`
  );

  const res = await data.json();

  return res;
}
