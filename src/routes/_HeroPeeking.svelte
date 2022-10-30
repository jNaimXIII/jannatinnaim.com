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

    @keyframes slide-up {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
    animation: slide-up 2s;

    img {
      @keyframes bounce {
        from,
        to {
          transform: translateY(-0.2rem);
        }
        50% {
          transform: translateY(0);
        }
      }
      animation: bounce 2s ease-in-out infinite;

      width: 100%;
      display: block;

      filter: grayscale(100%);
    }

    @media (max-width: 768px) {
      width: 140px;
    }
  }
</style>
