<script>
  let { icon, name, description } = $props();
</script>

<div class="card">
  <div class="icon">
    {#if icon != ""}
      <i class="cagh-icon {icon}"></i>
    {/if}
  </div>
  <div class="description">
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
</div>

<style>
  .card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    border-radius: 0.3rem;
    background-position: 100%;
    background-size: 400%;
    user-select: none;
  }
  .card:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    cursor: pointer;
  }
  .cagh-icon {
    font-size: 2rem;
  }
  .description {
    text-overflow: ellipsis;
  }
</style>
