<script>
  export let theme;
  export let prefersDarkScheme;

  export let handleClick;
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
