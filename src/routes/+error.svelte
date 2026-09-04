<script>
    import { page } from "$app/state";

    let errorRes = page.error?.message ?? "Oh nee, deze persoon bestaat niet!";
</script>

<h1>({page.status})</h1>

<p>{errorRes}</p>

<a href="/">Terug naar overzicht</a>
