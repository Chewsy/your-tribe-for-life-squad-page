<script>
    let { data } = $props();

    const persons = $derived(data.persons);
</script>

<main class="grid">
	{#each persons as person}
    <article class="student-card">{person.name}</article>
	{/each}
</main>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(auto, 1fr);
        gap: 10px;
        flex-wrap: wrap;
    }

    article {
        width: 300px;
        height: 300px;
        background-color: aquamarine;
        border-radius: 10px;
    }
</style>
