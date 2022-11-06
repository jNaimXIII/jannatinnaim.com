<script lang="ts">
  import Menu from "./_Menu.svelte";
  import Dock from "./_Dock.svelte";

  import Hero from "./_Hero.svelte";
  import About from "./_About.svelte";
</script>

<Menu />
<Dock />

<main>
  <Hero />
  <About />
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
