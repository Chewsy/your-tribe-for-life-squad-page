const endpointBase = "https://fdnd.directus.app";
const cohortFilter = "filter[squads][squad_id][cohort][_eq]=2627";

export function load() {

    const url = `${endpointBase}/items/person?${cohortFilter}`;
    const persons = fetch(url)

        .then((res) => res.json())
        .then(({ data }) =>
            data.map((person) => ({
                ...person,
                image: person.mugshot
                    ? `${endpointBase}/assets/${person.mugshot}`
                    : person.avatar ?? null,
            }))
        );

    return { persons };
}