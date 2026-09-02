export async function load() {
    const res = await fetch("https://fdnd.directus.app/items/person");
    const data = await res.json();

    return { persons: data.data };
}