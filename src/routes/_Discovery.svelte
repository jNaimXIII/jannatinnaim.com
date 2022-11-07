<script lang="ts">
  import discoveryContent from "$lib/data/content/discovery.json";
</script>

<section class="discovery" id="discovery">
  <h2>Things worth looking at?</h2>

  <div class="grid">
    {#each discoveryContent.showcase as card}
      <a href={card.url} class="card" style="background-image: url({card.background})">
        <div class="content">
          <h3>{card.name}</h3>
          <p>{card.description}</p>
        </div>
      </a>
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    padding: 72px 96px;
  }

  h2,
  .grid {
    font-family: "Comfortaa", cursive;
  }

  h2 {
    font-size: 42px;
    margin-bottom: 32px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 300px);
    gap: 1rem;

    .card {
      position: relative;
      color: $primary-font-color;

      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      &:hover {
        .content {
          background: #ccc;

          h3 {
            margin-bottom: 8px;
          }

          p {
            height: 4ch;
          }
        }
      }

      .content {
        position: absolute;
        bottom: 0;
        padding: 12px;

        display: block;
        width: 100%;

        background: #cccccc99;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        transition: all 0.3s ease-in-out;

        h3 {
          transition: all 0.2s ease-out;
        }

        p {
          transition: all 0.3s ease;
          overflow: hidden;
          height: 0ch;

          transition: all 0.2s ease-in-out;
        }
      }
    }

    .card:nth-child(1) {
      grid-row: 1/2;
      grid-column: 1/7;
    }

    .card:nth-child(2) {
      grid-row: 1/2;
      grid-column: 7/10;
    }

    .card:nth-child(3) {
      grid-row: 1/2;
      grid-column: 10/13;
    }

    .card:nth-child(4) {
      grid-row: 2/3;
      grid-column: 1/5;
    }

    .card:nth-child(5) {
      grid-row: 2/3;
      grid-column: 5/9;
    }

    .card:nth-child(6) {
      grid-row: 2/3;
      grid-column: 9/13;
    }
  }
</style>
