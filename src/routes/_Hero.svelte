<script lang="ts">
  import "$lib/styles/home/section.scss";
</script>

<section class="hero">
  <h1 data-role="greeting">Heyo! How's it going?</h1>
  <p>I'm <strong>Jannatin Naim</strong> and I do a lot of things so... keep scrolling to find out.</p>

  <iconify-icon icon="akar-icons:chevron-down" height="64px" />
</section>

<style lang="scss">
  .hero {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 26px;

    h1,
    p {
      font-family: "Comfortaa", cursive;
    }

    h1 {
      font-size: 64px;
    }

    iconify-icon {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
