<script lang="ts">
</script>

<div class="dock-container">
  <div class="dock">
    <nav>
      <a href="/">
        <iconify-icon icon="akar-icons:home-alt1" height="36px" />
      </a>
      <a href="/">
        <iconify-icon icon="akar-icons:info" height="36px" />
      </a>
      <a href="/">
        <iconify-icon icon="akar-icons:search" height="36px" />
      </a>
    </nav>
  </div>
</div>

<style lang="scss">
  .dock-container {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;

    height: 100vh;
    padding: 8px;
    padding-top: 52px;

    .dock {
      background: white;

      width: 64px;
      height: 100%;
      padding: 8px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border: 1px solid #ddd;
      border-radius: 8px;

      nav {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 12px;

        a {
          color: $primary-font-color;
        }
      }
    }
  }
</style>
