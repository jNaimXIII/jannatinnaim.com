<script lang="ts">
  import MenuLinks from "./_MenuLinks.svelte";

  export let isMobileNavigationToggled: boolean;
</script>

<header class:mobile-navigation-toggled={isMobileNavigationToggled}>
  <div class="branding">
    <a href="/" title="Jannatin Naim">Jannatin Naim</a>
  </div>

  <MenuLinks bind:isMobileNavigationToggled on:mobileNavigationClick />
</header>

<style lang="scss">
  header {
    grid-row: 1/2;
    grid-column: 1/3;
    border-radius: 0.5rem;

    box-shadow: $layout-box-shadow;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0.5rem;

    .branding {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      a {
        text-decoration: none;
        color: $primary-font-color;

        font-family: $primary-font;
        font-weight: 700;
        font-size: 1.125rem;
        letter-spacing: 0.04rem;
      }
    }

    &.mobile-navigation-toggled {
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    }

    @media (max-width: 425px) {
      grid-column: 1/2;
      grid-row: 1/2;
    }
  }
</style>
