<script lang="ts">
</script>

<nav />

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
  }
</style>
