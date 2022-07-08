<script>
  export let icon;
  export let name;
  export let description;
</script>

<div class="card">
  <div class="icon">
    {#if icon != ""}
      <i class="cagh-icon {icon}" />
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
    background-image: linear-gradient(
      45deg,
      var(--secondary-color) 50%,
      transparent 50%
    );
    background-position: 100%;
    background-size: 400%;
    transition: background 100ms ease-in-out;
    user-select: none;
  }
  .card:hover {
    background-position: 0;
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
