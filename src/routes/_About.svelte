<section class="about" id="about">
  <h2>Who am I?</h2>

  <div class="content">
    <p>Let's see....</p>

    <p>Professionally, I'm a developer specializing in front-end web development with adequate back-end experience.</p>

    <p>
      I make content on YouTube and post semi-decent stuff on Twitter. Highly active in online communities so, maybe
      we'll meet there someday.
    </p>

    <p>For now, just keep scrolling.</p>
  </div>

  <img src="/images/profile.png" alt="Jannatin Naim's profile" />
</section>

<style lang="scss">
  section {
    font-family: "Comfortaa", cursive;

    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 35% auto;

    gap: 38px;

    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    h2 {
      grid-column: 1/2;
      grid-row: 1/2;
      align-self: flex-end;
      justify-self: flex-end;

      font-size: 42px;
    }

    .content {
      grid-column: 2/3;
      grid-row: 2/3;

      display: flex;
      flex-direction: column;
      gap: 16px;

      font-size: 18px;
      line-height: 1.5em;
    }

    img {
      grid-column: 1/2;
      grid-row: 2/3;
      justify-self: flex-end;

      width: 100%;

      border-radius: 50%;
    }
  }
</style>
