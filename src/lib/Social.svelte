<script>
// @ts-nocheck

  let profile = "Carlitoshsh";
</script>

<svelte:head />

<div class="profile">
  <img
    fetchpriority="low"
    src="https://avatars.githubusercontent.com/u/7323124?v=4"
    alt="Carlos"
  />
  <div class="social">
    <!-- <h4>👋 Hi, there!</h4> -->
    <h4>Carlos Gomez</h4>
    <h5>{profile}</h5>
    <a
      href="https://linkedin.com/in/{profile}"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i class="devicon-linkedin-plain" />
    </a>
    <a
      href="https://github.com/{profile}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="devicon-github-original" />
    </a>
  </div>
</div>

<style>
  .profile {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  i[class*="devicon"] {
    font-size: 2rem;
  }
  a {
    color: var(--text-color);
    text-decoration: none;
  }

  a:hover {
    color: var(--secondary-color);
  }

  img {
    border-radius: 50%;
    height: inherit;
    height: 10rem;
    border: 3px solid var(--secondary-color);
  }
  @media (max-width: 500px) {
    .profile {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
</style>
