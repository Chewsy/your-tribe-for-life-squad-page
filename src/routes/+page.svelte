<script>
    import Card from "$lib/Card.svelte";

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

</style>
