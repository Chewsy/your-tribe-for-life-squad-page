export async function load({ params, fetch }) {
	const response = await fetch(`https://fdnd.directus.app/items/person/${params.personId}`);
	const { data: person } = await response.json();

	return { person };
}