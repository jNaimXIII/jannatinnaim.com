<script lang="ts">
  import "$lib/styles/globals.scss";

  import { theme, USER_SELECTED_THEME_KEY, type Theme } from "$lib/stores";
  import { onMount } from "svelte";

  onMount(() => {
    const userSelectedTheme = window.localStorage.getItem(USER_SELECTED_THEME_KEY);

    if (!userSelectedTheme) {
      let isUsingDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (isUsingDarkMode) {
        $theme = "dark";
      }

      window.localStorage.setItem(USER_SELECTED_THEME_KEY, $theme);
    } else {
      $theme = userSelectedTheme as Theme;
    }
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap" rel="stylesheet" />
</svelte:head>

<slot />
