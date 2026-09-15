const endpointBase = "https://fdnd.directus.app";
const cohortFilter = "filter[squads][squad_id][cohort][_eq]=2627";

export async function load() {
    const url = `${endpointBase}/items/person?${cohortFilter}`;
    const res = await fetch(url);

    const { data } = await res.json();

    // Maak een array van de tabel
    // maak een variabele voor mugshot en indien mugshot `null` is, gebruik avatar voor de variabele
    const persons = data.map((person) => ({
        ...person,
        image: person.mugshot
            ? `${endpointBase}/assets/${person.mugshot}`
            : null,
    }));

    const cities = [];
    for (const person of persons) {
        if (person.residency && !cities.includes(person.residency)) {
            cities.push(person.residency);
        }
    }

    const seasons = [];
    for (const person of persons) {
        if (person.fav_season && !seasons.includes(person.fav_season)) {
            seasons.push(person.fav_season);
        }
    }

    return { persons, cities, seasons };
}