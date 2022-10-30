import { writable } from "svelte/store";

export type Theme = "dark" | "light" | "none";
export const theme = writable<Theme>("none");

export const USER_SELECTED_THEME_KEY = "userSelectedTheme";
