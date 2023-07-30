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

export async function getBookE(editionId) {
  if (!editionId) return;

  const data = await fetch(`https://openlibrary.org/books/${editionId}.json`);

  const res = await data.json();

  return res;
}

export async function getBookW(workId) {
  if (!workId) return;

  const data = await fetch(`https://openlibrary.org/works/${workId}.json`);

  const res = await data.json();

  return res;
}
export async function getBookWorkEdition(workId) {
  if (!workId) return;

  const data = await fetch(
    `https://openlibrary.org/works/${workId}/editions.json`
  );

  const res = await data.json();

  return res;
}
export async function getBookRatings(workId) {
  if (!workId) return;

  const data = await fetch(
    `https://openlibrary.org/works/${workId}/ratings.json`
  );

  const res = await data.json();

  return res;
}
export async function getBookBookshelves(workId) {
  if (!workId) return;

  const data = await fetch(
    `https://openlibrary.org/works/${workId}/bookshelves.json`
  );

  const res = await data.json();

  return res;
}

export async function getAuthors(id) {
  if (!id) return;

  const data = await fetch(`https://openlibrary.org/authors/${id}.json`);

  const res = await data.json();

  return res;
}
