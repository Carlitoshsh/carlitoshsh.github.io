<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<main>
  {@render children?.()}
</main>

<style>
  main {
    padding: var(--main-lateral-padding);
  }
</style>
