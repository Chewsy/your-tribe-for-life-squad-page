const endpointBase = "https://fdnd.directus.app";
const cohortFilter = "filter[squads][squad_id][cohort][_eq]=2627";

export async function load({ fetch }) {
    const url = `${endpointBase}/items/person?${cohortFilter}`;
    const res = await fetch(url);

    const { data } = await res.json();

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
