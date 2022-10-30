<script lang="ts">
  import { theme } from "$lib/stores";
</script>

<nav class={$theme} />

<style lang="scss">
  nav {
    grid-column: 2/3;
    grid-row: 2/3;
    border-radius: 8px;

    box-shadow: $layout-box-shadow;

    @media (max-width: 425px) {
      grid-column: 1/2;
      grid-row: 3/4;
    }

    &.dark {
      box-shadow: $layout-box-shadow-dark;
    }
  }
</style>
