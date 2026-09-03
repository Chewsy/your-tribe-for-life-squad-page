<script>
    import StudentCard from "$lib/student_card.svelte";

    let { data } = $props();
</script>

<main>
    <ul class="grid">
        {#each data.persons as person}
            <li>
                <StudentCard {person} />
            </li>
        {/each}
    </ul>
</main>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        gap: 1rem;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    @media (width >= 768px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (width >= 1024px) {
        .grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
