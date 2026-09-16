<script>
    import SkeletonCard from "$lib/SkeletonCard.svelte";
    import Sort from "$lib/SortButtons.svelte";
    import SquadList from "$lib/SquadList.svelte";

    let { data } = $props();

    let sortOrder = $state("asc");

    function makeSort(newOrder) {
        sortOrder = newOrder;
    }
</script>

<main>
    <h1 class="visually-hidden">Squad overzicht</h1>

    <Sort {sortOrder} onSort={makeSort} />

    <p class="visually-hidden" role="status">
        {#await data.persons}
            De squad wordt geladen.
        {:then persons}
            De squad is ingeladen.
        {:catch}
            Er ging iets mis met het laden van de squad. Ververs de pagina.
        {/await}
    </p>

    {#await data.persons}
        <ul class="squad-list">
            {#each Array(24) as _}
                <li class="squad-list-item">
                    <SkeletonCard />
                </li>
            {/each}
        </ul>
    {:then persons}
        <SquadList {persons} {sortOrder} />
    {:catch}
        <p class="error-state">
            Er ging iets mis met het laden van de squad. Ververs de pagina.
        </p>
    {/await}
</main>

<style>
    main {
        width: min(100% - 2rem, 1280px);
        margin: 0 auto;
        padding: 2rem 0 3rem;
    }

    .error-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-sm);
        min-height: 50dvh;
        padding: var(--space-lg);
        color: var(--dark-purple);
        font-size: var(--font-size);
        text-align: center;
    }
</style>
