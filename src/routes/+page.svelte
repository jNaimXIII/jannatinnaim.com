<script lang="ts">
  import Menu from "./_Menu.svelte";
  import Dock from "./_Dock.svelte";

  import Home from "./_Home.svelte";
  import About from "./_About.svelte";
  import Discovery from "./_Discovery.svelte";
</script>

<svelte:head>
  <title>Jannatin Naim</title>
</svelte:head>

<Menu />
<Dock />

<main>
  <Home />
  <About />
  <Discovery />
</main>

<style lang="scss">
  main {
    padding: 8px;
    // Manu Offset
    padding-top: 52px;
    // Dock Offset
    padding-right: 80px;
  }
</style>
