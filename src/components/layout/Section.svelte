<script>
  export let title = undefined;
</script>

<section>
  {#if title}
    <h4>{title}</h4>
  {/if}
  <slot />
</section>

<style>
  section {
    border: 2px solid var(--secondary-color);
    padding: var(--padding);
    border-radius: var(--border-radius);
  }

  section:not(:last-child) {
    margin-bottom: 2rem;
  }

  h4 {
    padding: var(--padding-small);
    border-radius: var(--border-radius-small);
    background-color: var(--secondary-color);
    color: var(--primary-color);
    width: fit-content;
    margin-bottom: 1rem;
  }
</style>
