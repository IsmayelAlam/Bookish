export async function getQuotes() {
  const data = await fetch(
    `https://api.api-ninjas.com/v1/quotes?category=education`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": import.meta.env.VITE_NinjaEduQuotes,
      },
    }
  );

  const res = await data.json();

  return res;
}
