<script>
    import Card from "$lib/Card.svelte";
    import SkeletonCard from "$lib/Skeleton_card.svelte";

    let { data } = $props();
</script>

<main>
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
