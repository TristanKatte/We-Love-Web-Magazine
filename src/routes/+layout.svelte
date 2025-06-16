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
		--txt-color: #c2c2c2;
		--heading-color: #50cece;
		--project-card-color: #495057;
		--strong-color: #f2e9e4;
	}

  main {
	overflow-y: scroll;
	background-color: #8d8d8d;
	
}

	.layout {
		height: 100%;
		max-inline-size: 100vw;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: 1em;
		box-sizing: border-box;

	@media (max-width: 768px) {
		padding-inline: var(--size-7);
	}

	@media (max-width: 1440px) {
		padding-inline: 0;
	}
	}
</style>