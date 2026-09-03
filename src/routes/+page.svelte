<script>
    import Card from '$lib/Card.svelte';
    let {data} = $props();
    let { persons } = $derived(data);

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