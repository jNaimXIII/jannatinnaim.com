<script lang="ts">
  import "$lib/styles/globals.scss";
  import Dock from "$lib/components/_Dock.svelte";
  import Menu from "$lib/components/_Menu.svelte";
  import { theme } from "$lib/stores";
</script>

<div id="app">
  <Menu />

  <Dock />

  <main class={[$theme].join(" ")}>
    <slot />
  </main>
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
    }
  }
</style>
