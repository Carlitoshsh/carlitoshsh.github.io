<script>
  import Header from "./components/layout/Header.svelte";
  import Footer from "./components/layout/Footer.svelte";
  import Social from "./lib/Social.svelte";
  import Main from "./components/layout/Main.svelte";
  import Card from "./components/visual/Card.svelte";
  import Section from "./components/layout/Section.svelte";

  import { programmingLanguages } from "./assets/demo/Data";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
  />
</svelte:head>

<main class="parent">
  <Header />
  <Main>
    <h2>⚠️ Site under construction</h2>
    <Section>
      <Social />
    </Section>
    <Section title="Skills">
      <div class="cards">
        {#each programmingLanguages as lang}
          <Card
            icon={lang.icon}
            name={lang.name}
            description={lang.description != lang.name ? lang.description : ""}
          />
        {/each}
      </div>
    </Section>
  </Main>
  <Footer />
</main>

<style>
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
</style>
