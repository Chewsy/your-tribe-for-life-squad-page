<script>
    import Card from "$lib/Card.svelte";

    let { data } = $props();
</script>

<main>
    <ul class="squad-list">
        {#each data.persons as person}
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
