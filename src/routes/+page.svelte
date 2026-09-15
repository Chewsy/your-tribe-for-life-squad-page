<script>
    import Card from "$lib/Card.svelte";
    import SkeletonCard from "$lib/Skeleton_card.svelte";

    import Sort from "$lib/SortButtons.svelte";
    let { data } = $props();

    let sortOrder = $state('asc');

    function makeSort(newOrder) {
        sortOrder = newOrder;
    }

    let sortedPersons = $derived(getSortedPersons());

    function getSortedPersons() {
        let copy = [];
        for (let i = 0; i < data.persons.length; i++) {
            copy.push(data.persons[i]);
    }

    copy.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (sortOrder === 'asc') {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    return copy

    }
</script>

<main>

    <Sort {sortOrder} onSort={makeSort} />

    <ul class="squad-list">
        {#each sortedPersons as person (person.id)}
            <li class="squad-list-item">
                <Card {person} />
            </li>
        {/each}
    <p class="visually-hidden" role="status">
        {#await data.persons}
            De squad wordt geladen.
        {:then}
            De squad is ingeladen.
        {:catch error}
            Er ging iets mis met het laden van de squad. Ververs de pagina.
        {/await}
    </p>

    <ul class="squad-list">
        {#await data.persons}
            {#each Array(24) as _}
                <li class="squad-list-item">
                    <SkeletonCard />
                </li>
            {/each}
        {:then persons}
            {#each persons as person}
                <li class="squad-list-item">
                    <Card {person} />
                </li>
            {/each}
        {/await}
    </ul>
</main>

<style>
    main {
        width: min(100% - 2rem, 1280px);
        margin: 0 auto;
        padding: 2rem 0 3rem;
    }

    .squad-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.25rem;
        align-items: stretch;

        @media (width >= 768px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        @media (width >= 1024px) {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }

    .squad-list-item {
        min-width: 0;
    }

    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
</style>
