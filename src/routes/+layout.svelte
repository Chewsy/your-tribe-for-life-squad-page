<script>
	// hiermee haal ik het favicon bestand uit de assets map
	import favicon from '$lib/assets/favicon.svg';
	// hiermee haal ik de navigatie component erbij
	import Navigation from '$lib/Navigation.svelte';
	import '$lib/styleguide.css';

	// $props() pakt de props van deze layout, children is de pagina die erin komt
	let { children } = $props();
</script>

<!-- dit is voor dingen die in de head van de pagina moeten staan -->
<svelte:head>
	<!-- hiermee zet ik het favicon als icoontje in je browser tab -->
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- dit laat de navigatie bovenaan elke pagina zien -->
<Navigation />
<!-- hiermee render ik de inhoud van de pagina, bijv de cards -->
{@render children()}
