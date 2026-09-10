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
    * {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .squad-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        gap: 1em;
        align-items: start;
        justify-items: stretch;
        padding: 0.5em;

        /* From 500px is the width for the cards wider */
        @media (width >= 500px) {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        /* On big screen */
        @media (width >= 900px) {
            padding-left: 1em;
            padding-right: 1em;
        }
    }
</style>
