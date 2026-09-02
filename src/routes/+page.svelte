<script>
    import StudentCard from "$lib/student_card.svelte";

    let { data } = $props();
</script>

<main>
    <section class="grid">
        {#each data.persons as person}
            <StudentCard {person} />
        {/each}
    </section>
</main>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        gap: 1rem;
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
