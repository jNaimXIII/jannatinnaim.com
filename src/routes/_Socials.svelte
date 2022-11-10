<script lang="ts">
  import "$lib/styles/home/section.scss";
  import { socialSections, type SocialSection, components, type SocialData } from "$lib/data/content/socials";
  import { fly } from "svelte/transition";
  import { backIn, backInOut } from "svelte/easing";

  export let socialsData: SocialData;

  let selectedSection: SocialSection = socialSections[0];

  const getSectionComponent = () => {
    const componentPath = components.get(selectedSection);
    if (componentPath) return import(componentPath).then((component) => component.default);
  };
</script>

<section class="socials" id="socials">
  <h3>Socials</h3>

  <div class="sections">
    {#each socialSections as section}
      <button on:click={() => (selectedSection = section)} class:active={selectedSection === section}>
        {section}
      </button>
    {/each}
  </div>

  {#key selectedSection}
    <div
      class="view"
      in:fly={{ easing: backIn, x: 32, duration: 200 }}
      out:fly={{ easing: backInOut, x: -32, duration: 200 }}
    >
      {#await getSectionComponent() then SectionComponent}
        <svelte:component this={SectionComponent} {socialsData} />
      {/await}
    </div>
  {/key}
</section>

<style lang="scss">
  .socials {
    padding: 100px;

    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 32px auto;
    gap: 32px;

    font-family: "Comfortaa", sans-serif;

    h3 {
      grid-row: 1/2;
      grid-column: 1/3;

      font-size: 32px;
      margin-bottom: 32px;
    }

    .sections {
      grid-row: 2/3;
      grid-column: 1/2;
      align-self: center;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      button {
        background: none;
        border: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 16px;
        font-size: 18px;
        border-radius: 16px;

        transition: box-shadow 0.3s ease-in-out, background 0.2s ease-out;

        &:hover {
          cursor: pointer;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px, inset 1rem 0 0 0 #eee;
        }
      }

      button.active {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px, inset 300px 0 0 0 #eee;
      }
    }

    .view {
      grid-row: 2/3;
      grid-column: 2/3;
    }
  }
</style>
