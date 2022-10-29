<script lang="ts">
  import { theme } from "$lib/stores";

  import Menu from "$lib/components/menu/_Menu.svelte";
  import Dock from "$lib/components/_Dock.svelte";

  import About from "./_About.svelte";
  import Hero from "./_Hero.svelte";
  import Showcase from "./_Showcase.svelte";
  import Signature from "./_Signature.svelte";
  import Works from "./_Works.svelte";

  let isMobileNavigationToggled: boolean;
  let appElement: HTMLDivElement;
  const handleMobileNavigationClick = () => {
    console.log("i toggled");
    if (isMobileNavigationToggled) {
      appElement.style.gridTemplateColumns = "auto 0px";
      appElement.style.gridTemplateRows = "auto 0px";
    } else {
      appElement.style.gridTemplateColumns = "auto 64px";
      appElement.style.gridTemplateRows = "32px auto";
    }
  };
</script>

<svelte:head>
  <title>Jannatin Naim</title>
</svelte:head>

<div id="app" bind:this={appElement}>
  <Menu on:mobileNavigationClick={handleMobileNavigationClick} bind:isMobileNavigationToggled />

  <main class={[$theme].join(" ")}>
    <Hero />
    <About />
    <Works />
    <Showcase />
    <Signature />
  </main>

  <Dock />
</div>

<style lang="scss">
  #app {
    position: relative;
    height: 100vh;
    width: 100vw;

    display: grid;
    gap: 8px;
    padding: 8px;
    grid-template-columns: auto 64px;
    grid-template-rows: 32px auto;

    @media (max-width: 425px) {
      grid-template-columns: auto;
      grid-template-rows: 32px auto 64px;
    }
  }

  main {
    grid-row: 2/3;
    grid-column: 1/2;
    border-radius: 8px;
    overflow: scroll;

    scroll-snap-type: y mandatory;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    box-shadow: $layout-box-shadow;

    @media (max-width: 425px) {
      grid-column: 1/2;
      grid-row: 2/3;
    }
  }
</style>
