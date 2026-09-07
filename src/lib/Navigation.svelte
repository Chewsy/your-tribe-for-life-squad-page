<script>
	import fdndLogo from '$lib/assets/fdndlogo.png';
</script>

<header class="site-header">
	<nav class="site-navigation" aria-label="Main navigation">
		<a class="logo-link" href="/" aria-label="FDND home">
			<img class="logo-image" src={fdndLogo} alt="FDND" />
		</a>

		<div class="navigation-actions">
			<label class="search-field">
				<!-- deze tekst is alleen voor screenreaders -->
				<span class="visually-hidden">Search</span>
				<input type="search" placeholder="Search..." />
				<!-- dit svg is het vergrootglas icoon -->
				<svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
					<circle cx="11" cy="11" r="6"></circle>
					<path d="m16 16 4 4"></path>
				</svg>
			</label>

			<button class="filter-button" type="button" aria-label="Filter people">
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M4 7h16M4 12h16M4 17h16"></path>
					<circle cx="9" cy="7" r="1.75"></circle>
					<circle cx="15" cy="12" r="1.75"></circle>
					<circle cx="11" cy="17" r="1.75"></circle>
				</svg>
			</button>
		</div>
	</nav>
</header>

<style>
	.site-header,
	.site-header * {
		box-sizing: border-box;
	}

	.site-header {
		background: white;
		padding: 1.75rem 1.5rem 1.25rem;
	}

	.site-navigation {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		margin: 0 auto;
		max-width: 1200px;
	}

	.logo-link {
		color: black;
		flex: 0 0 auto;
		text-decoration: none;
	}

	.logo-image {
		display: block;
		width: auto;
		height: 2.625rem;
		object-fit: contain;
	}

	.navigation-actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		min-width: 0;
	}

	.search-field {
		display: flex;
		align-items: center;
		width: min(38vw, 10.25rem);
		height: 2.5rem;
		padding: 0 0.75rem 0 0.9rem;
		border: 1px solid black;
		border-radius: 999px;
		box-shadow: 0 2px 5px rgb(0 0 0 / 12%);
	}

	.search-field:focus-within {
		outline: 3px solid #1d70b8;
		outline-offset: 2px;
	}

	.search-field input {
		width: 100%;
		min-width: 0;
		border: 0;
		outline: 0;
		background: transparent;
		color: black;
		font: inherit;
	}

	.search-field input::placeholder {
		color: #555;
		opacity: 1;
	}

	.search-icon,
	.filter-button svg {
		width: 1.5rem;
		height: 1.5rem;
		flex: 0 0 auto;
		fill: none;
		stroke: currentColor;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 1.75;
	}

	.filter-button {
		display: grid;
		place-items: center;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border: 0;
		background: white;
		color: black;
		cursor: pointer;
	}

	.filter-button svg {
		width: 2rem;
		height: 2rem;
	}

	.logo-link:focus-visible,
	.filter-button:focus-visible {
		outline: 3px solid #1d70b8;
		outline-offset: 3px;
	}

	.filter-button:hover {
		background: #f2f2f2;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	/* dit zorgt dat de zoekbalk op kleine schermen compact blijft */
	@media (width >= 600px) {
		.site-header {
			padding: 1.75rem 2.5rem 1.25rem;
		}

		.navigation-actions {
			gap: 0.75rem;
		}

		.search-field {
			width: 10.25rem;
		}
	}
</style>