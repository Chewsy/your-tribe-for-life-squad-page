<script>
    import { page } from "$app/state";

    let errorRes = page.error?.message ?? "De pagina bestaat niet";
</script>

<h1>({page.status})</h1>

<p>{errorRes}</p>
