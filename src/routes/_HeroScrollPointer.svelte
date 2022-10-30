<script lang="ts">
  import Icon from "@iconify/svelte";
  import { theme } from "$lib/stores";
</script>

<a href="#about" class={$theme}>
  <Icon icon="bi:arrow-down-circle" width="100%" />
</a>

<style lang="scss">
  @keyframes bounce-up-and-down {
    from,
    to {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, -50%);
    }
  }

  a {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);

    width: 4rem;

    color: $primary-font-color;

    animation: bounce-up-and-down 2s ease-in-out infinite;

    @media (max-width: 425px) {
      width: 3rem;
      bottom: 1rem;
    }

    &.dark {
      color: $primary-font-color-dark;
    }
  }
</style>
