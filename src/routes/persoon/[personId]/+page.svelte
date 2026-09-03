<script>
	let { data } = $props();
	let person = data.person;
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

        {#if person.fav_kitchen}
			<p><strong>Kitchen:</strong> {person.fav_kitchen}</p>
		{/if}

		{#if person.fav_soup}
			<p><strong>Soup:</strong> {person.fav_soup}</p>
		{/if}

		{#if person.fav_fruit}
			<p><strong>Fruit:</strong> {person.fav_fruit}</p>
		{/if}

		{#if person.fav_game}
			<p><strong>Game:</strong> {person.fav_game}</p>
		{/if}

		{#if person.fav_music_genre}
			<p><strong>Muziek genre:</strong> {person.fav_music_genre}</p>
		{/if}

		{#if person.fav_season}
			<p><strong>Seizoen:</strong> {person.fav_season}</p>
		{/if}

		{#if person.fav_animal}
			<p><strong>Dier:</strong> {person.fav_animal}</p>
		{/if}

		{#if person.fav_hobby}
			<p><strong>Hobby:</strong> {person.fav_hobby}</p>
		{/if}

		{#if person.vibe_emoji}
			<p><strong>Vibe:</strong> {person.vibe_emoji}</p>
		{/if}

		{#if person.fav_emoji}
			<p><strong>Emoji:</strong> {person.fav_emoji}</p>
		{/if}

	</section>

	<section class="card">
		<h2>About me</h2>
		{#if person.nickname}
			<p><strong>Nickname:</strong> {person.nickname}</p>
		{/if}

		{#if person.shoe_size}
			<p><strong>Shoesize:</strong> {person.shoe_size}</p>
		{/if}

		{#if person.team_s13}
			<p><strong>Team S13:</strong> {person.team_s13}</p>
		{/if}
        
		{#if person.length}
			<p><strong>Height:</strong> {person.length}</p>
		{/if}
	</section>

	<section class="card">
		<h2>Tech favorites</h2>

		{#if person.fav_feature}
			<p><strong>Feature:</strong> {person.fav_feature}</p>
		{/if}

		{#if person.fav_attribute}
			<p><strong>Attribute:</strong> {person.fav_attribute}</p>
		{/if}

		{#if person.fav_tag}
			<p><strong>Tag:</strong> {person.fav_tag}</p>
		{/if}

		{#if person.fav_property}
			<p><strong>Property:</strong> {person.fav_property}</p>
		{/if}

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