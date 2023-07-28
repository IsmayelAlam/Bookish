export async function searchApi(title, author = false, page = 1) {
  if (!title) return;

  const data = await fetch(
    `https://openlibrary.org/search${
      author ? "/authors" : ""
    }.json?q=${title}&page=${page}`
  );

  const res = await data.json();

  return res;
}

export async function getBook(id) {
  if (!id) return;

  const data = await fetch(`https://openlibrary.org/books/${id}`);

  const res = await data.json();

  return res;
}
