<script>
  export let href = '#';
  export let current = '';
</script>

<a href={href} class="menu-item {current === href ? 'active' : ''}">
  <slot />
</a>

<style>
.menu-item {
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
  color: white;
background: blue;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;
}
.menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
}
.menu-item.active {
  text-decoration: underline;
  font-weight: bold;
}
</style>
