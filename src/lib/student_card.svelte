<script>
    let { person } = $props();
</script>

<article class="student-card">
    {#if person.image}
        <img src={person.image} alt="Foto van {person.name}" />
    {/if}
    <p>{person.name}</p>
</article>

<style>
    .student-card {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        background-color: aquamarine;
        border-radius: 10px;

        & img {
            width: 100%;
            height: 11rem;
            object-fit: cover;
            border-radius: 10px;
        }
    }
</style>
