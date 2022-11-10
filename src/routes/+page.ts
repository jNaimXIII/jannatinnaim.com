import type { SocialData } from "$lib/data/content/socials";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const animeCount = await fetch("/api/anime/count").then((response) => response.json());

  return {
    socialData: {
      MyAnimeList: {
        animeCount,
      },
    } as SocialData,
  };
};
