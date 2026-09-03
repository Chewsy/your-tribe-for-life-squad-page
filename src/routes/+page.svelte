<script>
    import Card from '$lib/Card.svelte';
    let {data} = $props();
    import StudentCard from "$lib/Student_card.svelte";

    let { data } = $props();
</script>


<ul class="squad-list">
    {#each persons as person}
        <li class="squad-list-item">
            <Card {person} />
        </li>
    {/each}
</ul>

<style>

  * {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .squad-list {
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(190px, 1fr));
    gap: 1em;
    align-items: start;
    justify-items: stretch;
    padding: .5em;

    /* From 500px is the width for the cards wider */
    @media (width >= 500px ) {
        grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    }

    /* On big screen */
    @media (width >= 900px ) {
      padding-left: 1em;
      padding-right: 1em;    
    }
  }



</style>
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
