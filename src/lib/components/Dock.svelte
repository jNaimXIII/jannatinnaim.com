<script lang="ts">
  import { theme } from "$lib/stores";
  import Icon from "@iconify/svelte";
</script>

<nav class={$theme}>
  <div class="links">
    <a href="#hero" title="Home">
      <Icon icon="bi:house" width="100%" />
    </a>
    <a href="#about" title="About">
      <Icon icon="ant-design:info-circle-outlined" width="100%" />
    </a>
  </div>
</nav>

<style lang="scss">
  nav {
    grid-column: 2/3;
    grid-row: 2/3;
    border-radius: 8px;

    box-shadow: $layout-box-shadow;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 425px) {
      grid-column: 1/2;
      grid-row: 3/4;
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      a {
        color: $primary-font-color;
        display: block;
        width: 42px;

        transition: all 0.4s ease-out;

        &:hover {
          transform: scale(1.12);
        }
      }

      @media (max-width: 425px) {
        flex-direction: row;
      }
    }

    &.dark {
      box-shadow: $layout-box-shadow-dark;

      .links {
        a {
          color: $primary-font-color-dark;
        }
      }
    }
  }
</style>
