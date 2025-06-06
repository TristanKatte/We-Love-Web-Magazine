<script>
  export let slug;
  export let title;
  export let image;
  export let color;
  export let className = ''; // renamed from `class`
</script>

<a
  href={`/issues/${slug}`}
  class={`menu-item ${className}`}
  style="background: {image ? `url(${image}) center/cover no-repeat` : color}" 
  aria-label={title}
>
  <div class="overlay-text">
    <h3>{title}</h3>
  </div>
</a>

<style>
  .menu-item {
    border-radius: 8px;
    padding: 2rem;
    color: white;
    text-decoration: none;
    position: relative;
    height: 160px;
    display: flex;
    align-items: flex-end;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;
    background-size: cover;
    background-position: center;
  }

  .menu-item:hover {
    transform: scale(1.03);
  }

  .overlay-text {
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    padding: 0.5rem 1rem;
  }

  .overlay-text h3 {
    margin: 0;
    font-size: 1.2rem;
  }
</style>
