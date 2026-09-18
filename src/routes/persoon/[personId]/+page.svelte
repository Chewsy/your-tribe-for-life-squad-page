<script>
	let { data } = $props();
	let person = data.person;

	let profileImageSrc = $state(
    person.mugshot ? `https://fdnd.directus.app/assets/${person.mugshot}` : '/img-fallback.png'
	);

    const favorites = [
	    { label: 'Soep', value: person.fav_soup },
		{ label: 'Fruit', value: person.fav_fruit },
		{ label: 'Spel', value: person.fav_game },
		{ label: 'Muziek genre', value: person.fav_music_genre },
		{ label: 'Seizoen', value: person.fav_season },
		{ label: 'Dier', value: person.fav_animal },
		{ label: 'Hobby', value: person.fav_hobby },
		{ label: 'Sfeer', value: person.vibe_emoji },
		{ label: 'Emoji', value: person.fav_emoji }
	];

	const aboutMe = [
		{ label: "Bijnaam", value: person.nickname },
		{ label: "Schoenmaat", value: person.shoe_size },
		{ label: "Team S13", value: person.team_s13 },
		{ label: "Lengte", value: person.length },
	];

	const techFavorites = [
		{ label: "Feature", value: person.fav_feature },
		{ label: "Attribuut", value: person.fav_attribute },
		{ label: "Tag", value: person.fav_tag },
		{ label: "Eigenschap", value: person.fav_property },
	];
</script>

<main class="profile-page">
<a class="back-link" href="/">← Back to overview</a>

<header class="profile-header">
	<img class="profile-photo" src={profileImageSrc} alt={person.name} onerror={() => (profileImageSrc = '/img-fallback.png')} />

		<div class="profile-info">
			<h1>{person.name}</h1>

			{#if person.github_handle}
				<p class="github-name">@{person.github_handle}</p>
			{/if}

			<p class="profile-details">
				{#if person.birthdate}
					<span>{person.birthdate}</span>
					<span class="divider">|</span>
				{/if}

			{#if person.residency}
				<span>{person.residency}</span>
			{/if}
			</p>
		</div>
</header>

{#if person.bio}
	<section class="card-bio-card">
		<h2>Bio</h2>
		<div class="bio-content">{@html person.bio}</div>
	</section>
{/if}

<div class="card-grid">
	<section class="card">
		<h2>Favorites</h2>

        {#each favorites as favorite}
			{#if favorite.value}
				<p>
					<strong>{favorite.label}:</strong> {favorite.value}
				</p>
			{/if}
		{/each}
	</section>

	<section class="card">
		<h2>About me</h2>

        {#each aboutMe as about}
            {#if about.value}
                <p><strong>{about.label}:</strong> {about.value}</p>
            {/if}
	    {/each}
	</section>

	<section class="card">
		<h2>Tech favorites</h2>

		{#each techFavorites as favorite}
		    {#if favorite.value}
                <p>
                    <strong>{favorite.label}:</strong> {favorite.value}
                </p>
		    {/if}
	    {/each}

        {#if person.fav_color}
			<p class="color-row">
				<strong>Favorite color:</strong>
				<span class="color-swatch" style="background:{person.fav_color}"></span>
				{person.fav_color}
			</p>
		{/if}
	</section>

	{#if person.fav_spotify_track}
		<section class="card">
			<h2>Favorite track</h2>
			<a class="spotify-button" href={person.fav_spotify_track} target="_blank" rel="noopener">
				<img src="/spotify-icon.svg" alt="" width="16" height="16" />
				Open op Spotify
			</a>
		</section>
	{/if}
	</div>
</main>

<style>
	.profile-page {
		font-family: var(--font);
		color: var(--dark-purple);
		max-width: 56.25rem;
		margin: 0 auto;
		padding: var(--space-lg);
	}

	.back-link {
		display: inline-block;
		color: var(--dark-purple);
		text-decoration: none;
		margin-bottom: var(--space-lg);
	}

	.profile-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		margin-bottom: var(--space-lg);

		.profile-photo {
			width: 9rem;
			height: 9rem;
			object-fit: cover;
			border-radius: var(--radius-card);
		}

		.profile-info {
			h1 {
				margin: 0;
				font-size: 1.75rem;
			}

			.github-name,
			.profile-details {
				margin: var(--space-sm) 0;
			}

			.profile-details {
				display: flex;
				gap: var(--space-sm);
			}

			.divider {
				color: var(--skeleton-gray);
			}
		}
	}

	.card-grid {
		display: grid;
		gap: var(--space-md);

		.card {
			border: 1px solid var(--skeleton-gray);
			border-radius: var(--radius-card);
			padding: 1.25rem;

			h2 {
				margin-top: 0;
				font-size: var(--font-size);
			}

			p {
				margin: 0.6rem 0;
			}

			.color-row {
				display: flex;
				align-items: center;
				gap: var(--space-sm);
			}

			.color-swatch {
				width: var(--space-md);
				height: var(--space-md);
				border-radius: var(--space-xs);
				border: 1px solid var(--skeleton-gray);
			}
		}
	}

	@media (min-width: 700px) {
		.profile-header {
			flex-direction: row;
			align-items: center;
		}

		.card-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	.spotify-button {
		display: inline-flex;
		align-items: center;
	}

	.card-grid {
		grid-template-columns: 1fr 1fr;
	}

	.card-bio-card {
		padding: 1.5rem 0 2rem 0;
	
		h2 {
			padding-bottom: .5rem;
		}
	}

	.spotify-button {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-md);
		margin-top: var(--space-md);
		background: var(--accent);
		border: none;
		border-radius: var(--radius);
		color: var(--white);
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;

		&:hover {
			background: var(--secondary-accent);
		}

		&:focus-visible {
			outline: 2px solid var(--dark-purple);
			outline-offset: 2px;
		}
	}
</style>
