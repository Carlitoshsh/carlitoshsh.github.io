<script>
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

<header>
  <h2 id="my-site-brand">CAGH</h2>
  <div id="color-switch" on:click={handleClick}>🌓</div>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #color-switch {
    cursor: pointer;
    font-size: 2rem;
    user-select: none;
  }

  #my-site-brand {
    background-color: var(--secondary-color);
    padding: var(--padding-small);
    border-radius: var(--border-radius-small);
    color: var(--primary-color);
  }
</style>
