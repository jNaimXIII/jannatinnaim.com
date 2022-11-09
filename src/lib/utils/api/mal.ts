import axios from "axios";
import { MAL_API_URL, MAL_CLIENT_ID } from "$env/static/private";

export const mal = axios.create({
  baseURL: MAL_API_URL,
  headers: {
    "X-MAL-CLIENT-ID": MAL_CLIENT_ID,
  },
});
