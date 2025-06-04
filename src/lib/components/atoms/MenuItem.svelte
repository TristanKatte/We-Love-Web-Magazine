<script>
  import { page } from '$app/stores';

  export let href = '#';

  $: currentPath = $page.url.pathname;
  $: isActive = currentPath === href;
</script>

<a
  href={href}
  class="menu-item {isActive ? 'active' : ''}"
  aria-current={isActive ? 'page' : undefined}
>
  <slot />
</a>

<style>
.menu-item {
  display: block;
  padding: 1.5rem 2rem;
  margin: 0.5rem 0;
  text-align: center;
  font-size: 1.25rem;
  color: white;
  background: #003366;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s, transform 0.2s;
}

.menu-item:hover {
  background: #005599;
  transform: scale(1.02);
}

.menu-item.active {
  background: #002244;
  font-weight: bold;
  text-decoration: underline;
}
</style>
