<script>
    import Card from "$lib/Card.svelte";
    import { page } from "$app/state";

    let { persons, sortOrder } = $props();

    const filteredPersons = $derived(
        persons.filter((person) => {
            const residency = page.url.searchParams.get("residency");
            const bold = page.url.searchParams.get("bold");
            const season = page.url.searchParams.get("season");

            if (residency && person.residency !== residency) return false;
            if (bold === "yes" && !person.is_bold) return false;
            if (bold === "no" && person.is_bold) return false;
            if (season && person.fav_season !== season) return false;

            return true;
        })
    );

    const sortedPersons = $derived(
        [...filteredPersons].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            return sortOrder === "asc"
                ? nameA.localeCompare(nameB)
                : nameB.localeCompare(nameA);
        })
    );
</script>

<ol class="squad-list">
    {#each sortedPersons as person (person.id)}
        <li class="squad-list-item">
            <Card {person} />
        </li>
    {:else}
        <li class="empty-state">
            Geen personen gevonden met deze filters.
            <a href="/">Wis alle filters</a>
        </li>
    {/each}
    </ol>

<style>
    .empty-state {
        grid-column: 1 / -1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-sm);
        min-height: 50dvh;
        padding: var(--space-lg);
        color: var(--dark-purple);
        font-size: var(--font-size);
        text-align: center;
    }

    .empty-state a {
        padding: var(--space-sm) var(--space-md);
        border-radius: var(--radius);
        background: var(--default-purple);
        color: var(--white);
        font-weight: var(--bold);
        transition:
            transform 150ms ease,
            box-shadow 150ms ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px var(--light-purple);
        }

        @media (prefers-reduced-motion: reduce) {
            transition: none;
        }
    }
</style>
