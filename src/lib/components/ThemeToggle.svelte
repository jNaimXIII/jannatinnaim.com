<script lang="ts">
  import Icon from "@iconify/svelte";
  import { theme, USER_SELECTED_THEME_KEY, type Theme } from "$lib/stores";
  import { onMount } from "svelte";

  let currentIcon: "fa6-regular:moon" | "fa6-regular:sun" = "fa6-regular:moon";
  const setIcon = () => {
    switch ($theme) {
      case "dark":
        currentIcon = "fa6-regular:sun";
        break;
      case "light":
        currentIcon = "fa6-regular:moon";
        break;
      case "none":
        return;
    }

    window.localStorage.setItem(USER_SELECTED_THEME_KEY, $theme);
  };

  onMount(() => {
    theme.subscribe(setIcon);
  });

  const handleToggleClick = () => {
    const themes: Theme[] = ["light", "dark"];
    const currentThemeIndex = themes.indexOf($theme);
    let nextThemeIndex: number;

    if (currentThemeIndex === themes.length - 1) nextThemeIndex = 0;
    else nextThemeIndex = currentThemeIndex + 1;

    $theme = themes[nextThemeIndex];
  };
</script>

<div class={["toggle-theme", $theme].join(" ")} on:click={handleToggleClick} on:keyup={handleToggleClick}>
  <Icon icon={currentIcon} width="100%" />
</div>

<style lang="scss">
  .toggle-theme {
    position: fixed;
    bottom: 16px;
    right: 88px;

    display: flex;
    align-items: center;

    width: 2rem;
    height: 2rem;

    color: $primary-font-color;
    opacity: 0.69;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
    padding: 0.4rem;
    border-radius: 8px;

    transition: all 0.3s ease-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.12);
    }

    &:active {
      transform: scale(0.8);
    }

    @media (max-width: 425px) {
      bottom: 88px;
      right: 16px;
    }

    &.dark {
      box-shadow: rgba(255, 255, 255, 0.2) 0px 2px 8px 0px;
      color: $primary-font-color-dark;
    }
  }
</style>
