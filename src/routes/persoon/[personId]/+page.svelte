<script>
	let { data } = $props();
	let person = data.person;
</script>

<a href="/">← Back to overview</a>

<header>
	{#if person.avatar}
		<img src={person.avatar} alt={person.name} />
	{/if}

	<div>
		<h1>{person.name}</h1>
		{#if person.github_handle}
			<p>@{person.github_handle}</p>
		{/if}

		{#if person.birthdate}
			<p>{person.birthdate}</p>
		{/if}
		{#if person.residency}
			<p>{person.residency}</p>
		{/if}
	</div>
</header>