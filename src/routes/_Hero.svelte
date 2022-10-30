<script lang="ts">
  import { theme } from "$lib/stores";
  import Icon from "@iconify/svelte";
  import HeroPeeking from "./_HeroPeeking.svelte";
  import HeroScrollPointer from "./_HeroScrollPointer.svelte";
</script>

<section id="hero" class={$theme}>
  <div class="greeting">
    <h1>Heyo! How's it going?</h1>

    <div>
      <p>I'm Jannatin Naim and I do a lot of things including building websites, but...</p>

      <p>
        keep scrolling to
        <a href="#about">find out more.</a>
        <Icon icon="fa6-regular:face-grin-wink" />
      </p>
    </div>
  </div>

  <HeroScrollPointer />
  <HeroPeeking />
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 1rem;

    color: $primary-font-color;
    font-family: $primary-font;

    .greeting {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8rem;
      text-align: center;

      h1 {
        @keyframes slide-down {
          from {
            transform: translateY(-2rem);
          }
          to {
            transform: translateY(0);
          }
        }

        animation: slide-down 0.7s ease-out;

        font-size: 5rem;
      }

      div {
        @keyframes slide-up {
          from {
            transform: translateY(2rem);
          }
          to {
            transform: translateY(0);
          }
        }
        animation: slide-up 1s ease-out;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;

        p {
          font-size: 1.2rem;
          opacity: 0.69;
          display: flex;
          align-items: center;
          gap: 0.2rem;

          a {
            color: $primary-font-color;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .greeting {
        gap: 4rem;

        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 1.1rem;
        }
      }
    }

    &.dark {
      color: $primary-font-color-dark;
      .greeting {
        div {
          p {
            a {
              color: $primary-font-color-dark;
            }
          }
        }
      }
    }
  }
</style>
