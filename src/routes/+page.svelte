<script lang="ts">
  import { theme } from "$lib/stores";

  import About from "./_About.svelte";
  import Hero from "./_Hero.svelte";
  import Showcase from "./_Showcase.svelte";
  import Signature from "./_Signature.svelte";
  import Works from "./_Works.svelte";
</script>

<svelte:head>
  <title>Jannatin Naim</title>
</svelte:head>

<main class={[$theme].join(" ")}>
  <Hero />

  <About />

  <Works />

  <Showcase />

  <Signature />
</main>

<style lang="scss">
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
