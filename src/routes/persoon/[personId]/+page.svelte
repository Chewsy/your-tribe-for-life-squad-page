<script>
	let { data } = $props();
	let person = data.person;

    const favorites = [
	    { label: 'Soup', value: person.fav_soup },
		{ label: 'Fruit', value: person.fav_fruit },
		{ label: 'Game', value: person.fav_game },
		{ label: 'Muziek genre', value: person.fav_music_genre },
		{ label: 'Seizoen', value: person.fav_season },
		{ label: 'Dier', value: person.fav_animal },
		{ label: 'Hobby', value: person.fav_hobby },
		{ label: 'Vibe', value: person.vibe_emoji },
		{ label: 'Emoji', value: person.fav_emoji }
	];

    const aboutMe = [
        { label: 'Nickname', value: person.nickname },
        { label: 'Shoesize', value: person.shoe_size },
        { label: 'Team S13', value: person.team_s13 },
        { label: 'Height', value: person.length }
    ];

    const techFavorites = [
        { label: 'Feature', value: person.fav_feature },
        { label: 'Attribute', value: person.fav_attribute },
        { label: 'Tag', value: person.fav_tag },
        { label: 'Property', value: person.fav_property }
    ];

</script>

<a class="back-link" href="/">← Back to overview</a>

<header class="profile-header">
	{#if person.avatar}
		<img class="profile-photo" src={person.avatar} alt={person.name} />
	{/if}

	<div class="profile-info">
		<h1>{person.name}</h1>

		{#if person.github_handle}
			<p class="handle">@{person.github_handle}</p>
		{/if}

        <p class="meta">
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


</style>