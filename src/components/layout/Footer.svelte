<footer>
  <span>{new Date().getFullYear()}</span>
  <span>
    Svelte, Render and MongoDB
  </span>
  <span class="by-cagh">Designed and built with &hearts by CAGH</span>
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .by-cagh {
    padding: var(--padding-small);
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    border-radius: var(--border-radius-small);
  }
</style>
