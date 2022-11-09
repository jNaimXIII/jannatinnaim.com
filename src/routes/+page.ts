import type { PageLoad } from "./$types";

export const prerender = "auto";

export const load: PageLoad = async ({ fetch }) => {
  const animeCount = await fetch("/api/anime/count").then((response) => response.json());

  return {
    anime: {
      count: Number(animeCount),
    },
  };
};
