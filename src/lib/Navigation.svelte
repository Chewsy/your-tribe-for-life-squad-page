<script>
	import fdndLogo from "$lib/assets/fdndlogo.png";
	import FilterButton from "$lib/FilterButton.svelte";

	let { cities = [], seasons = [] } = $props();
</script>

<header class="site-header">
	<nav class="site-navigation" aria-label="Main navigation">
		<a class="logo-link" href="/" aria-label="FDND home">
			<img class="logo-image" src={fdndLogo} alt="FDND" />
		</a>

		<div class="navigation-actions">
			<FilterButton {cities} {seasons} />
		</div>
	</nav>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 10;
		border-bottom: 1px solid var(--skeleton-gray);
		background: var(--white);
		box-shadow: 0 2px 8px var(--skeleton-gray);
		padding: var(--space-md);
	}

	.site-navigation {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-sm);
		margin: 0 auto;
		max-width: 75rem;
	}

	.logo-link {
		color: var(--dark-purple);
		flex: 0 0 auto;
		text-decoration: none;
	}

	.logo-image {
		display: block;
		width: auto;
		height: 3rem;
		object-fit: contain;
	}

	.navigation-actions {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		min-width: 0;
	}

	.logo-link:focus-visible {
		outline: 3px solid var(--default-purple);
		outline-offset: 3px;
	}

	@media (width >= 600px) {
		.site-header {
			padding: var(--space-md) var(--space-xl);
		}

		.navigation-actions {
			gap: var(--space-sm);
		}
	}
</style>
