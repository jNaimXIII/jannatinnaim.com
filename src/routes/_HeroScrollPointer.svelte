<script lang="ts">
  import Icon from "@iconify/svelte";
  import { theme } from "$lib/stores";
</script>

<a href="#about" class={$theme}>
  <Icon icon="bi:arrow-down-circle" width="100%" />
</a>

<style lang="scss">
  a {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);

    width: 4rem;

    color: $primary-font-color;

    @media (max-width: 425px) {
      width: 3rem;
      bottom: 1rem;
    }

    &.dark {
      color: $primary-font-color-dark;
    }
  }
</style>
