<script lang="ts">
  import ProfileIcon from "$lib/assets/profile.jpeg";
  import { theme } from "$lib/stores";
</script>

<section id="about" class={$theme}>
  <div class="tagline">
    <h1>Who Am I?</h1>
  </div>

  <div class="banner">
    <img src={ProfileIcon} alt="Jannatin Naim" />
  </div>

  <div class="content">
    <p>
      Hi! I'm a developer with <b>front-end focused</b> skills with relevant experiences in back-end technologies too.
      I'm familiar with <a href="#skills">modern web technologies</a> which you can look into detail.
    </p>

    <p>
      Ow, I enjoy Japanese media such as all these <a href="#anime">anime that I've watched</a> alongside
      <a href="#music">music of such kind</a>. I also hava a <a href="/">blog</a> where I write a variety of content on a
      regular basis.
    </p>

    <div class="actions">
      <p>You can check out <a href="#socials">my socials</a>. I'm pretty active over there as well.</p>
    </div>
  </div>
</section>

<style lang="scss">
  #about {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 20vh auto;
    gap: 3rem;
    padding: 4rem;

    font-family: $primary-font;
    color: $primary-font-color;

    .tagline {
      grid-row: 1/2;
      grid-column: 1/2;

      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      h1 {
        font-size: 4rem;
        line-height: 2.5rem;
      }
    }

    .banner {
      grid-row: 2/3;
      grid-column: 1/2;

      display: flex;
      align-items: flex-start;
      justify-content: flex-end;

      img {
        display: block;
        max-width: 420px;
        border-radius: 8px;
        filter: grayscale(100%);
      }
    }

    .content {
      grid-row: 2/3;
      grid-column: 2/3;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        opacity: 0.69;
        font-size: 1.22rem;
        line-height: 1.5em;
        letter-spacing: 1px;
        max-width: 40ch;

        a {
          color: $primary-font-color;
        }
      }
    }

    @media (max-width: 1024px) {
      padding: 1rem;

      .banner {
        img {
          max-width: 330px;
        }
      }

      .content {
        p {
          font-size: 1.1rem;
          letter-spacing: normal;
        }
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;

      .tagline,
      .banner {
        justify-content: center;
        align-items: center;
      }

      .tagline {
        h1 {
          font-size: 3rem;
        }
      }

      .banner {
        img {
          max-width: 270px;
        }
      }

      .content {
        align-items: center;
        grid-row: 3/4;
        grid-column: 1/2;
      }
    }

    &.dark {
      color: $primary-font-color-dark;

      .content {
        a {
          color: $primary-font-color-dark;
        }
      }
    }
  }
</style>
