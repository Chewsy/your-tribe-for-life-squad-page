<script>
	let { data } = $props();
	let person = data.person;

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
        { label: 'Bijnaam', value: person.nickname },
        { label: 'Shoenmaat', value: person.shoe_size },
        { label: 'Team S13', value: person.team_s13 },
        { label: 'Lengte', value: person.length }
    ];

    const techFavorites = [
        { label: 'Feature', value: person.fav_feature },
        { label: 'Attribuut', value: person.fav_attribute },
        { label: 'Tag', value: person.fav_tag },
        { label: 'Eigenschap', value: person.fav_property }
    ];

</script>

<a class="back-link" href="/">← Back to overview</a>

<header class="profile-header">
	{#if person.mugshot}
		<img class="profile-photo" src={`https://fdnd.directus.app/assets/${person.mugshot}`} alt={person.name} />
	{/if}

	<div class="profile-info">
		<h1>{person.name}</h1>

		{#if person.github_handle}
			<p class="github-name">@{person.github_handle}</p>
		{/if}

        <p class="profile-details">
			{#if person.birthdate}
				<span>{person.birthdate}</span>
			{/if}

			{#if person.birthdate && person.residency}
				<span class="divider">|</span>
			{/if}

			{#if person.residency}
				<span>{person.residency}</span>
			{/if}
		</p>

	</div>
</header>

{#if person.bio}
	<section class="card bio-card">
		<h2>Bio</h2>
		<p>{person.bio}</p>
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
			<a href={person.fav_spotify_track} target="_blank">Open op Spotify</a>
		</section>
	{/if}
</div>

<style>
:global(body) {
	font-family: system-ui, sans-serif;
	color: #1a1a1a;
	max-width: 900px;
	margin: 0 auto;
	padding: 1.5rem;
}

.back-link {
	display: inline-block;
	color: #1a1a1a;
	text-decoration: none;
	margin-bottom: 1.5rem;
}

.profile-header {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1.5rem;

	.profile-photo {
		width: 9rem;
		height: 9rem;
		object-fit: cover;
		border-radius: 1rem;
	}

	.profile-info {
		h1 {
			margin: 0;
			font-size: 1.75rem;
		}

		.github-name,
		.profile-details {
			color: #6b6b6b;
			margin: 0.5rem 0;
		}

		.profile-details {
			display: flex;
			gap: 0.5rem;
		}

		.divider {
			color: #ccc;
		}
	}
}

.card-grid {
	display: grid;
	gap: 1rem;

	.card {
		border: 1px solid #e0e0e0;
		border-radius: 1rem;
		padding: 1.25rem;

		h2 {
			margin-top: 0;
			font-size: 1rem;
		}

		p {
			margin: 0.6rem 0;
		}

		.color-row {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		.color-swatch {
			width: 1rem;
			height: 1rem;
			border-radius: 0.25rem;
			border: 1px solid #ccc;
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

</style>