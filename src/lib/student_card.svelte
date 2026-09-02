<script>
    import openArrow from "$lib/assets/open_arrow.svg";

    let { person } = $props();
</script>

<article class="student-card">
    {#if person.image}
        <img src={person.image} alt="Foto van {person.name}" />
    {/if}
    <div class="name-age">
        <p>{person.name}</p>

        <a href="#slug-route">
            <img
                class="open-detailpage-icon"
                src={openArrow}
                alt="open {person.name}'s visitekaartje"
            />
        </a>
    </div>
</article>

<style>
    .student-card {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: hsl(0, 0%, 100%);
        border-radius: 0.5rem;
        border: 1px solid black;

        @media (width < 768px) {
            font-size: small;
        }

        & img {
            width: 100%;
            height: 11rem;
            object-fit: cover;
            border-radius: 0.5rem 0.5rem 0 0;
        }

        & .name-age {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-left: 1rem;
            padding-right: 1rem;
            & p {
                margin: 0;
                padding: 0;
            }

            & .open-detailpage-icon {
                width: 1.25rem;
                height: 1.25rem;
            }
        }
    }
</style>
