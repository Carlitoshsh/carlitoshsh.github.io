<section>
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
</style>
