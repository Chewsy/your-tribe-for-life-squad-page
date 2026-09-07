<script>
    import { page } from "$app/state";

    const message = page.error?.message ?? "Oh nee, deze persoon bestaat niet!";
</script>

<main class="error">
    <h1 class="error-code">{page.status}</h1>

    <h2>Pagina niet gevonden</h2>

    <p>{message}</p>

    <a href="/">Terug naar overzicht</a>
</main>

<style>
    .error {
        display: flex;
        height: 100dvh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: var(--font);
    }

    .error-code {
        font-size: 6rem;
        font-weight: 700; /* lettertype diktes toevoegen aan stylesheet */
        color: var(--dark-purple);
    }

    h2 {
        font-size: 2rem; /* meer groottes toevoegen aan stylesheet */
        color: var(--dark-purple);
    }

    p {
        color: var(--dark-purple);
    }

a {
	padding: var(--space-sm) var(--space-md);
	margin-top: var(--space-md);
	background-color: var(--accent);
	color: var(--white);
	font-size: var(--font-size);
	text-decoration: none;
	border-radius: var(--radius);
}

a:hover {
	background-color: var(--secondary-accent);
}
</style>
