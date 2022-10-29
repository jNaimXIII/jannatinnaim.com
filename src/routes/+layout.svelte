<script lang="ts">
  import "$lib/styles/globals.scss";

  import Menu from "$lib/components/menu/_Menu.svelte";
  import Dock from "$lib/components/_Dock.svelte";

  let isMobileNavigationToggled: boolean;
  let appElement: HTMLDivElement;
  const handleMobileNavigationClick = () => {
    console.log("i toggled");
    if (isMobileNavigationToggled) {
      appElement.style.gridTemplateColumns = "auto 0px";
      appElement.style.gridTemplateRows = "auto 0px";
    } else {
      appElement.style.gridTemplateColumns = "auto 64px";
      appElement.style.gridTemplateRows = "32px auto";
    }
  };
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap" rel="stylesheet" />
</svelte:head>

<div id="app" bind:this={appElement}>
  <Menu on:mobileNavigationClick={handleMobileNavigationClick} bind:isMobileNavigationToggled />
  <Dock />
  <slot />
</div>

<style lang="scss">
  #app {
    position: relative;
    height: 100vh;
    width: 100vw;

    display: grid;
    gap: 8px;
    padding: 8px;
    grid-template-columns: auto 64px;
    grid-template-rows: 32px auto;

    @media (max-width: 425px) {
      grid-template-columns: auto;
      grid-template-rows: 32px auto 64px;
    }
  }
</style>
