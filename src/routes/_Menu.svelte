<script lang="ts">
  import FavIcon from "$lib/assets/images/favicon.png";
</script>

<div class="menu-container">
  <div class="menu">
    <div class="branding">
      <img src={FavIcon} alt="Jannatin Naim's favicon" />
    </div>

    <div class="social-links">
      <iconify-icon icon="fa6-brands:youtube" height="22px" />
      <iconify-icon icon="fa6-brands:twitter" height="22px" />
      <iconify-icon icon="fa6-brands:github" height="22px" />
    </div>
  </div>
</div>

<style lang="scss">
  .menu-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    padding: 8px;

    .menu {
      background: white;

      height: 36px;
      padding: 4px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 1px solid #ddd;
      border-radius: 8px;

      .branding {
        img {
          display: block;
          height: 26px;

          border-radius: 6px;
        }
      }

      .social-links {
        display: flex;
        gap: 8px;
      }
    }
  }
</style>
