import type { RequestHandler } from "./$types";
import { mal } from "$lib/utils/api/mal";
import { MAL_USERNAME } from "$env/static/private";

export const GET: RequestHandler = async () => {
  let count = 0;
  let hasNextPage = false;

  do {
    const response = await mal.get(`/users/${MAL_USERNAME}/animelist`, {
      params: {
        limit: 1000,
      },
    });

    count += response.data.data.length;
    hasNextPage = !!response.data.paging.next;
  } while (hasNextPage);

  return new Response(String(count));
};
