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

    // Personen filteren
    const filteredPersons = $derived(
        data.persons.filter((person) => {
        const residency = page.url.searchParams.get("residency");
        const bold = page.url.searchParams.get("bold");   

            if (residency && person.residency !== residency){
                return false;
            }

            if (bold === "yes" && !person.is_bold) {
            return false;
            }

            if (bold === "no" && person.is_bold) {
            return false;
            }

            return true;
        })
    )

</script>

<main>
	
    <FilterButton {cities} />

    <ul class="squad-list">
        {#each filteredPersons as person}
            <li class="squad-list-item">
                <Card {person} />
            </li>
        {/each}
    </ul>
</main>

<style>
    * {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .squad-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        gap: 1em;
        align-items: start;
        justify-items: stretch;
        padding: 0.5em;

        /* From 500px is the width for the cards wider */
        @media (width >= 500px) {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        /* On big screen */
        @media (width >= 900px) {
            padding-left: 1em;
            padding-right: 1em;
        }
    }
</style>
