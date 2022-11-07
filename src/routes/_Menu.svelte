<div class="menu-container">
  <div class="menu">
    <div class="branding">
      <img src="/favicon.png" alt="Jannatin Naim's favicon" />
    </div>

    <div class="social-links">
      <a href="https://youtube.com/@jNaimXIII">
        <iconify-icon icon="fa6-brands:youtube" height="22px" />
      </a>
      <a href="https://twitter.com/jNaimXIII">
        <iconify-icon icon="fa6-brands:twitter" height="22px" />
      </a>
      <a href="https://github.com/jNaimXIII">
        <iconify-icon icon="fa6-brands:github" height="22px" />
      </a>
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

        a {
          color: $primary-font-color;
        }
      }
    }
  }
</style>
