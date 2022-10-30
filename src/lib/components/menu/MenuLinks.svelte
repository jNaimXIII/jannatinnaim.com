<script lang="ts">
  import Icon from "@iconify/svelte";
  import { theme } from "$lib/stores";
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  export let isMobileNavigationToggled = false;
  const handleMobileNavigationClick = () => {
    isMobileNavigationToggled = !isMobileNavigationToggled;
    dispatch("mobileNavigationClick");
  };

  onMount(() => {
    const isMobileScreenListener = () => {
      const mobileWidth = 425;
      const isMobileScreen = window.innerWidth <= mobileWidth;

      if (!isMobileScreen && isMobileNavigationToggled) {
        isMobileNavigationToggled = false;
        dispatch("mobileNavigationClick");
      }
    };

    window.addEventListener("resize", isMobileScreenListener);

    return () => {
      window.removeEventListener("resize", isMobileScreenListener);
    };
  });
</script>

<nav class={["links", $theme].join(" ")} class:mobile-navigation-toggled={isMobileNavigationToggled}>
  <button class="mobile-navigation-toggle" on:click={handleMobileNavigationClick}>
    {#if isMobileNavigationToggled}
      <Icon icon="fa6-solid:xmark" />
    {:else}
      <Icon icon="fa6-solid:bars" />
    {/if}
  </button>

  <div class="site-links">
    <a href="/">Blog</a>
    <a href="/">Showcase</a>
  </div>

  <div class="social-links">
    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCov_vTQLbt22Cu1LH-ZRKyw" title="YouTube">
      <Icon icon="fa6-brands:youtube" />
    </a>

    <a target="_blank" rel="noreferrer" href="https://discord.com/invite/fNQ9EbhVPX" title="Discord">
      <Icon icon="fa6-brands:discord" />
    </a>

    <a target="_blank" rel="noreferrer" href="https://github.com/jNaimXIII" title="GitHub">
      <Icon icon="fa6-brands:github" />
    </a>
  </div>
</nav>

<style lang="scss">
  .links {
    display: flex;
    align-items: center;
    gap: 1rem;

    .site-links,
    .social-links {
      display: flex;
      align-items: center;

      a {
        color: $primary-font-color;
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: scale(1.12);
        }
      }
    }

    .site-links {
      gap: 1rem;

      a {
        text-decoration: none;
        font-family: $primary-font;
        font-size: 0.9rem;
      }
    }

    .social-links {
      gap: 0.5rem;

      a {
        display: flex;
        align-items: center;
      }
    }

    .mobile-navigation-toggle {
      display: none;
      align-items: center;

      border: none;
      background: none;

      font-size: 1.2rem;
      color: $primary-font-color;
    }

    @media (max-width: 425px) {
      .mobile-navigation-toggle {
        display: flex;
      }

      .site-links,
      .social-links {
        display: none;
      }
    }

    &.mobile-navigation-toggled {
      flex-direction: column;
      gap: 2rem;

      .mobile-navigation-toggle {
        order: 9;
      }

      .site-links,
      .social-links {
        display: flex;
      }

      .site-links {
        flex-direction: column;
      }

      .social-links {
        gap: 2rem;
      }
    }

    &.dark {
      .mobile-navigation-toggle {
        color: $primary-font-color-dark;
      }

      .site-links,
      .social-links {
        a {
          color: $primary-font-color-dark;
        }
      }
    }
  }
</style>
