<script>
    let {data} = $props();

    const persons = $derived(data.persons);
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


{#each persons as squad}


{/each}

<style>

</style>