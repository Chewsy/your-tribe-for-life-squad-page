// Documentatie: https://svelte.dev/docs/kit/errors
// Svelte heeft een helper functie die je kan importeren en alle error code handling voor je doet
// De resultaten van de handler worden op src/routes/+error.svelte weergeven

import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const res = await fetch(`https://fdnd.directus.app/items/person/${params.personId}`);

	// Als de response niet (!) ok is, weergeef de error 404 met de hardcoded error bericht
	if (!res.ok) {
		error(404, { message: 'Oh nee, deze persoon bestaat niet!' });
	}

	const { data: person } = await res.json();
	return { person };
}