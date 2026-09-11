<script>
    import Card from "$lib/Card.svelte";
    import FilterButton from "$lib/FilterButton.svelte";
    import { page } from "$app/state";
    
    let { data } = $props();

    // Lijst maken van alle woonplaatsen
    let cities = [];
    for (const person of data.persons) {
        if (person.residency && !cities.includes(person.residency)) {
            cities.push(person.residency);
        }
    }

    // Lijst maken van alle seizoenen
    let seasons = []
    for (const person of data.persons) {
        if (person.fav_season && !seasons.includes(person.fav_season)) {
            seasons.push(person.fav_season);
        }
    }    

    // Personen filteren
    const filteredPersons = $derived(
        data.persons.filter((person) => {
        const residency = page.url.searchParams.get("residency");
        const bold = page.url.searchParams.get("bold");   
        const season = page.url.searchParams.get("season"); 

            if (residency && person.residency !== residency){
                return false;
            }

            if (bold === "yes" && !person.is_bold) {
            return false;
            }

            if (bold === "no" && person.is_bold) {
            return false;
            }

            if (season && person.fav_season !== season) {
            return false;
            }

            return true;
        })
    )

</script>

<main>
	
    <FilterButton {cities} {seasons} />

    <ul class="squad-list">
        {#each filteredPersons as person}
            <li class="squad-list-item">
                <Card {person} />
            </li>
        {:else}
         <p class="empty-state">
            Geen personen gevonden met deze filters.
            <a href="/">Wis alle filters</a>
        </p>  
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

    .empty-state {
        text-align: center;
        padding: var(--space-lg, 2rem);
        color: var(--dark-purple);
        font-size: var(--font-size);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-sm, 0.75rem);


        a {
        display: inline-block;
        color: var(--white);
        font-weight: 600;
        background: var(--default-purple);
        padding: var(--space-sm);
        border-radius: 0.5rem;
        transition: transform 150ms ease, box-shadow 150ms ease;

            &:hover {
            transform: translateY(2px);
            box-shadow: 0 8px 16px var(--light-purple);
            }
        }
    }
  
    .squad-list-item {
        min-width: 0;
    }

</style>
