<script lang="ts">
  import "$lib/styles/globals.scss";
  import "iconify-icon";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<slot />

<style lang="scss">
  :global(html) {
    scroll-behavior: smooth;

    scroll-snap-type: y proximity;

    @media (min-width: 1024px) {
      scroll-snap-type: y mandatory;
    }
  }
</style>
