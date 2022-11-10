<script lang="ts">
  import type { SocialData } from "$lib/data/content/socials";
  import "$lib/styles/home/social_section.scss";

  export let socialsData: SocialData;
  $: data = socialsData.MyAnimeList;
</script>

<article class="my-anime-list">
  <p>Aha! We meet once again and so I shall inform you about my anime profile.</p>

  <p>
    Got no content to put here so, the anime count of {data?.animeCount} it is.
  </p>
</article>

<style lang="scss">
  .my-anime-list {
    p {
      margin-bottom: 12px;
    }
  }
</style>
