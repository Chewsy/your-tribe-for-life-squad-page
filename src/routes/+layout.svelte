<script>
	import favicon from "$lib/assets/favicon.svg";
	import Navigation from "$lib/Navigation.svelte";
	import Footer from "$lib/Footer.svelte";
	import "$lib/styleguide.css";

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation cities={data.cities} seasons={data.seasons} />

{@render children()}
<Footer />
