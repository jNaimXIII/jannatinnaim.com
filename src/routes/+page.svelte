<script lang="ts">
  import { theme } from "$lib/stores";

  import Menu from "$lib/components/menu/Menu.svelte";
  import Dock from "$lib/components/Dock.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  import About from "./_About.svelte";
  import Hero from "./_Hero.svelte";
  import Showcase from "./_Showcase.svelte";
  import Signature from "./_Signature.svelte";
  import Works from "./_Works.svelte";
  import { onMount } from "svelte";

  let isMobileNavigationToggled: boolean;
  let appElement: HTMLDivElement;
  const handleMobileNavigationClick = () => {
    const isMobileScreen = window.innerWidth <= 425;

    if (isMobileNavigationToggled) {
      if (isMobileScreen) {
        appElement.style.gridTemplateColumns = "auto";
        appElement.style.gridTemplateRows = "auto 0px 0px";
      } else {
        appElement.style.gridTemplateColumns = "auto 0px";
        appElement.style.gridTemplateRows = "auto 0px";
      }
    } else {
      if (isMobileScreen) {
        appElement.style.gridTemplateColumns = "auto";
        appElement.style.gridTemplateRows = "32px auto 64px";
      } else {
        appElement.style.gridTemplateColumns = "auto 64px";
        appElement.style.gridTemplateRows = "32px auto";
      }
    }
  };
</script>

<svelte:head>
  <title>Jannatin Naim</title>
</svelte:head>

<div id="home" bind:this={appElement} class={$theme}>
  <Menu on:mobileNavigationClick={handleMobileNavigationClick} bind:isMobileNavigationToggled />

  <main>
    <Hero />
    <About />
    <Works />
    <Showcase />
    <Signature />

    <ThemeToggle />
  </main>

  <Dock />
</div>

<style lang="scss">
  #home {
    position: relative;
    height: 100vh;
    width: 100vw;

    display: grid;
    gap: 8px;
    padding: 8px;
    grid-template-columns: auto 64px;
    grid-template-rows: 32px auto;

    background: #eee;

    transition: background 0.4s ease-out;

    @media (max-width: 425px) {
      grid-template-columns: auto;
      grid-template-rows: 32px auto 64px;
    }

    main {
      position: relative;

      grid-row: 2/3;
      grid-column: 1/2;
      border-radius: 8px;
      overflow-y: scroll;

      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;

      box-shadow: $layout-box-shadow;

      @media (min-width: 426px) {
        scrollbar-width: thin;
        // scrollbar-width: none;
        &::-webkit-scrollbar {
          // display: none;
          width: 10px;
        }

        scrollbar-color: #ccc white;
        &::-webkit-scrollbar-thumb {
          background: #ccc;

          &:hover {
            background: #bbb;
          }
        }
      }

      @media (max-width: 425px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
    }

    &.dark {
      background: #111;

      main {
        box-shadow: $layout-box-shadow-dark;

        scrollbar-color: #333 #111;
        &::-webkit-scrollbar-thumb {
          background: #333;

          &:hover {
            background: #555;
          }
        }
      }
    }
  }
</style>
