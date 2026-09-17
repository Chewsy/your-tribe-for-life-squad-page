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
			<label class="search-field">
				<span class="visually-hidden">Search</span>
				<input type="search" placeholder="Zoek een student" />
				<svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
					<circle cx="11" cy="11" r="6"></circle>
					<path d="m16 16 4 4"></path>
				</svg>
			</label>

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

	.search-field {
		display: flex;
		align-items: center;
		width: min(49vw, 16rem);
		height: 2.75rem;
		padding: 0 var(--space-sm) 0 var(--space-md);
		border: 1px solid var(--skeleton-gray);
		border-radius: 999px;
		background: var(--white);
		box-shadow: 0 1px 2px var(--skeleton-gray);
	}

	.search-field:focus-within {
		border-color: var(--default-purple);
		box-shadow: 0 0 0 3px hsl(268 62% 46% / 25%);
	}

	.search-field input {
		width: 100%;
		min-width: 0;
		border: 0;
		outline: 0;
		background: transparent;
		color: var(--dark-purple);
		font: inherit;
	}

	.search-field input::placeholder {
		color: var(--dark-purple);
		opacity: 0.6;
	}

	.search-icon {
		width: var(--space-lg);
		height: var(--space-lg);
		flex: 0 0 auto;
		fill: none;
		stroke: currentColor;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 1.75;
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

		.search-field {
			width: 16rem;
		}
	}
</style>
