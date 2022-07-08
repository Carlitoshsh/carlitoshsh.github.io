<script>
  import Header from "./components/layout/Header.svelte";
  import Footer from "./components/layout/Footer.svelte";
  import LinkedIn from "./lib/LinkedIn.svelte";
  import Main from "./components/layout/Main.svelte";
  import Card from "./components/visual/Card.svelte";
  import Section from "./components/layout/Section.svelte";

  import { programmingLanguages } from "./assets/demo/Data";

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  let theme = prefersDarkScheme.matches ? "dark" : "light";
  function handleClick() {
    theme =
      document.body.classList.toString() === "light-theme" ? "light" : "dark";
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
    } else {
      document.body.classList.toggle("dark-theme");
    }
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
  />
</svelte:head>

<main class="parent">
  <Header {theme} {prefersDarkScheme} {handleClick} />
  <Main>
    <LinkedIn {theme} />
    <Section>
      <div class="cards">
        {#each programmingLanguages as lang}
          <Card
            icon={lang.icon}
            name={lang.name}
            description={lang.description}
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
