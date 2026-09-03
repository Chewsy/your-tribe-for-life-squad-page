<script>
    import openArrow from "$lib/assets/open_arrow.svg";

    let { person } = $props();
</script>

<article class="student-card">
    {#if person.image}
        <img src={person.image} alt="Foto van {person.name}" />
    {/if}
    <div class="name-age">
        <h2>{person.name}</h2>

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
        height: 100%;
        background-color: hsl(0, 0%, 100%);
        border-radius: 0.5rem;
        border: 1px solid black;

        & h2 {
            font-size: 12px;
        }

        @media (width < 768px) {
            h2 {
                font-size: 10px;
            }
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
            align-items: center;
            padding-left: 1rem;
            padding-right: 1rem;
            & h2 {
                margin: 0;
                padding: 0;
            }

            & a {
                display: flex;
                align-items: center;
            }

            & .open-detailpage-icon {
                width: 1.25rem;
                height: 1.25rem;
            }
        }
    }
</style>
