<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';

	export let data;
</script>

<div class="layout">
	<Header featuredPost={data.featuredPost} />


	<main>
		
		<slot />
	</main>

	<Footer />
</div>

<style>
	:global(:root) {
		--main-bg-color: #393c44;
		--btn-color: #00adb5;
		--txt-color: #DEDEDE;
		--heading-color: #A2F3F3;
		--project-card-color: #495057;
		--strong-color: #f2e9e4;
	}

	:global(html) {
    	scroll-behavior: smooth;
  	}

	main {
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	.layout {
		min-height: 100vh;
		max-inline-size: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		box-sizing: border-box;
		scroll-behavior: smooth;
		background: var(--gradient-16);
		z-index: 1;

		@media (max-width: 768px) {
			padding-inline: var(--size-7);
		}

		@media (max-width: 1440px) {
			padding-inline: 0;
		}
	}

	.layout > main {
		grid-row: 2;
		overflow-y: auto;
		scroll-snap-type: y mandatory;
		min-height: 0;
}
</style>
