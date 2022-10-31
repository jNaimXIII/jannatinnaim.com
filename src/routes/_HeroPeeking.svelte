<script lang="ts">
  import DenjiPeekingIcon from "$lib/assets/denji_peeking.png";
</script>

<div class="peeking">
  <img src={DenjiPeekingIcon} alt="Denji peeking at you..." />
</div>

<style lang="scss">
  .peeking {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 220px;

    img {
      width: 100%;
      display: block;

      filter: grayscale(100%);
    }

    @media (max-width: 768px) {
      width: 140px;
    }
  }
</style>
