<script lang="ts">
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Header from '$lib/components/organisms/Header.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<!-- <script>
  
  import { onMount } from 'svelte';
  export let data;

  const { featuredPost } = data;

  let headerHeight = 0;
  let headerElement;

  onMount(() => {
    if (headerElement) {
      // Get actual rendered height
      headerHeight = headerElement.offsetHeight;
    }
  });
</script>

<Header bind:this={headerElement} {featuredPost} />

<main class="layout-content" style="padding-top: {headerHeight || 160}px;">

  <slot />
</main>

<style>

</style> -->

<style>
	:global(:root) {
		--main-bg-color: #393c44;
		--btn-color: #00adb5;
		--txt-color: #c2c2c2;
		--heading-color: #50cece;
		--project-card-color: #495057;
		--strong-color: #f2e9e4;
	}

	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);

		@media (min-width: 1440px) {
			padding-inline: 0;
		}

		main {
			padding-block: var(--size-9);
		}
	}
</style>
