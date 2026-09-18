const endpointBase = "https://fdnd.directus.app";
const cohortFilter = "filter[squads][squad_id][cohort][_eq]=2627";

export async function load({ fetch }) {
    const url = `${endpointBase}/items/person?${cohortFilter}`;
    const res = await fetch(url);

    const { data } = await res.json();

    // Maak een array van de tabel
    // maak een variabele voor mugshot en indien mugshot `null` is, gebruik avatar voor de variabele
    const persons = data.map((person) => ({
        ...person,
        image: person.mugshot_year2
            ? `${endpointBase}/assets/${person.mugshot_year2}`
            : null,
    }));

    const cities = [];
    const seasons = [];

    for (const person of data) {
        if (person.residency && !cities.includes(person.residency)) {
            cities.push(person.residency);
        }

        if (person.fav_season && !seasons.includes(person.fav_season)) {
            seasons.push(person.fav_season);
        }
    }

    return { cities, seasons };
}
