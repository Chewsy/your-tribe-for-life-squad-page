<script>
    import Card from '$lib/Card.svelte';
    let {data} = $props();

    const persons = $derived(data.persons);
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
    @media (min-width: 500px ) {
        grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    }
  }



</style>