<script>
    import Card from '$lib/Card.svelte';
    let {data} = $props();

    const persons = $derived(data.persons);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<ul>
    {#each persons as person}
        <li>
            <Card {person} />
        </li>
    {/each}
</ul>

<style>

</style>