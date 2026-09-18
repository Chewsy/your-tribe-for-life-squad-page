const endpointBase = "https://fdnd.directus.app";
const cohortFilter = "filter[squads][squad_id][cohort][_eq]=2627";

export function load({ fetch }) {
    const url = `${endpointBase}/items/person?${cohortFilter}`;

    const persons = fetch(url)
        .then((res) => res.json())
        .then(({ data }) =>
            data.map((person) => ({
                ...person,
                image: person.mugshot_year2
                    ? `${endpointBase}/assets/${person.mugshot_year2}`
                    : null,
            }))
        );

    return { persons };
}
