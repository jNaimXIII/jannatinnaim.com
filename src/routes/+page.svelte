<script lang="ts">
  import About from "./_About.svelte";
  import Hero from "./_Hero.svelte";
  import Showcase from "./_Showcase.svelte";
  import Signature from "./_Signature.svelte";
  import Works from "./_Works.svelte";
</script>

<svelte:head>
  <title>Jannatin Naim</title>
</svelte:head>

<Hero />

<About />

<Works />

<Showcase />

<Signature />

<style lang="scss">
  :global(#app > main > section) {
    scroll-snap-align: start;

    height: 100%;
    border-radius: 8px;
  }
</style>
