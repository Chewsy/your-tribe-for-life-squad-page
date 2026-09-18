# Squadpage - Team The Girls

<img width="auto" height="200" alt="image" src="https://github.com/user-attachments/assets/2ddc31da-06e4-40bb-a5df-cf0f88837033" />  

[Live link](https://your-tribe-for-life-squadpage.netlify.app/)  

---

<img width="1080" height="600" alt="screenshot-rocks" src="https://github.com/user-attachments/assets/14bbd9f5-5fee-4e4b-ad7c-f098812179b8" />


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Code Conventies](#code-conventies)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Wij hebben als team een ontwerp gemaakt en daar van een werkend squadpage van gemaakt waarin de gebruiker alle jaar tweedejaars squadleden te zien zijn, met per student een eigen detailpagina.

De data wordt live opgehaald uit Directus en gebouwt met SvelteKit. Je kunt de squad sorteren op naam. Ook kan je filteren op woonplaats, favoriete seizoen en of de squadlid kaal is of niet. Als je op iemand klikt, krijg je de detailpagina te zien.

## Gebruik
Op de overzichtspagina staat de hele squad als een grid van kaarten, voorgesorteerd op naam oplopend. Via de filterknop kun je filteren op woonplaats, favoriete seizoen en of de persoon kaal is of niet.

Elke kaart is een link naar de detailpagina van de aangeklikte squadlid waar meer informatie in staat. Bestaat de squadlid niet, dan krijgt de gebruiker een 404 pagina te zien.

## Kenmerken
### Directus (headless CMS)
De app haalt de studentendata op uit de Directus API (`https://fdnd.directus.app/items/person?filter[squads][squad_id][cohort][_eq]=2627`) en filtert op de juiste cohort.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/%2Bpage.server.js#L1-L19

### SvelteKit (framework)
Routing is opgebouwd met een dynamische route (`/persoon/[personId]`) voor de detailpagina's. De website maakt gebruik van herbruikbare componenten:
- Card
- SkeletonCard
- SquadList
- SortButtons
- FilterButton
- Navigation
- Footer

| Component | Wat doet het? |
| --- | --- |
| `Card` | Toont één squadlid (foto met fallback, naam, leeftijd) als link naar de detailpagina |
| `SkeletonCard` | Placeholder-kaart tijdens het laden |
| `SquadList` | Filtert en sorteert de squadleden en toont ze als grid |
| `SortButtons` | Knoppen om van A-Z of Z-A te sorteren |
| `FilterButton` | Knop met een popover die het filterformulier bevat |
| `Navigation` | Navigatiebalk met de filterknop |
| `Footer` | Voettekst op elke pagina |


### HTML
De pagina's zijn gebouwd met semantische elementen, zodat ze goed werken met een screenreader.

- `header`, `nav` en `main` voor de opbouw van de pagina
- `ol` en `li` voor de lijst met squadleden, met een `article` per kaart
- `form`, `fieldset`, `legend` en `label` voor het filter
- `alt=""` bij decoratieve icoontjes

### CSS
Elke component heeft een eigen `<style>`-blok, en de gedeelde waardes staan in `styleguide.css`.

- Custom properties (`var(--space-md)`, `var(--default-purple)`) voor kleuren en ruimtes
- `aspect-ratio` en `object-fit: cover` voor een responsive grid en foto's
- Media queries voor de indeling op grotere schermen
- `:popover-open` en `appearance: none` voor het eigen ontwerp van het filter
- `position: sticky` voor de navigatie
- `:focus-visible` en `prefers-reduced-motion` voor toegankelijkheid
- CSS nesting bij hover-stijlen en op de detailpagina

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/lib/FilterButton.svelte#L82-L93

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/lib/SquadList.svelte#L77-L79

### Overzichtspagina
<!-- Schrijf hier een stukje over de gebruikte technieken voor de overzichtspagina -->

### Loading en error states
#### Loading state
<img width="478" height="480" alt="Screen Recording 2026-09-17 at 21 01 50" src="https://github.com/user-attachments/assets/fc11f673-0755-4cf3-8778-f450b2a8c74d" />

Terwijl de squadleden worden geladen toont de pagina een grid met skeletonkaarten met een shiny animatie tenzij `prefers-reduced-motion`) ingeschakeld is voor de gebruiker. Als het laden mislukt verschijnt een error state met de optie om de pagina te verversen.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/09947ff1ac4b3dc88d9fa00e2359d6e47055ce0f/src/routes/%2Bpage.svelte#L20-L28
Dit verborgen stukje code zorgt er voor dat screenreader gebruikers de laadstatus van de pagina kunnen volgen en maakt de squadpage toegankelijk.  

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/09947ff1ac4b3dc88d9fa00e2359d6e47055ce0f/src/routes/%2Bpage.svelte#L30-L44
Dit stukje code laadt 24 skeletonkaarten in in de layout van de success state tot de data opgehaald is (promise is fullfilled). Na de await laadt de block de normale kaarten inclusief opgehaalde data in.

#### Error state
https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/09947ff1ac4b3dc88d9fa00e2359d6e47055ce0f/src/routes/%2Berror.svelte#L1-L7

Hier wordt de status van de error in een shorthand if else block gegooid. Als de error message overeenkomt met die van de geimporteerde error handler van Sveltekit, wordt dat uitgeprint. Anders krijgt de gebruiker de fallback message te zien.  
https://svelte.dev/docs/kit/$app-state

Deze pagina verschijnt als een squadlid niet bestaat. De load functie van de detailpagina gooit zelf een error 404. 
De pagina toont de statuscode, een titel, de melding en een link terug naar de overzichtspagina.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/%2Berror.svelte#L9-L17

### Navigatie
Navigation staat samen met Footer in `+layout.svelte`, dus ze staan automatisch op elke pagina. `{@render children()}` is de plek waar de pagina zelf wordt getoond.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/%2Blayout.svelte#L14-L17

De Navigation-component bevat het logo (link naar overzichtspagina) en de FilterButton. De header is `position: sticky`, dus de navigatie blijft bovenaan staan tijdens het scrollen. Navigation gebruikt `cities` en `seasons` zelf niet, maar geeft ze alleen door aan FilterButton.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/lib/Navigation.svelte#L5-L18

### Detailpagina
Elke kaart linkt naar `/persoon/[personId]`. De haakjes in de mapnaam maken er een dynamische route van: SvelteKit gebruikt één pagina voor alle squadleden en geeft het id door als `params.personId`. De `load`-functie haalt alleen die ene persoon op uit Directus. Is de response niet ok, dan roept `error(404, …)` (een helper van SvelteKit) de foutpagina aan.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/persoon/%5BpersonId%5D/%2Bpage.server.js#L5-L17

**Gegevens in lijstjes**

De pagina heeft veel losse velden (soep, fruit, hobby, enzovoort). Die staan niet elk in eigen HTML, maar in arrays met een `label` en een `value`. Met `{#each}` wordt daar één keer HTML voor gemaakt. Een nieuw veld toevoegen is dan één regel in de array.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/persoon/%5BpersonId%5D/%2Bpage.svelte#L9-L19

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/persoon/%5BpersonId%5D/%2Bpage.svelte#L73-L79

**Alleen tonen wat er is**

Niet elk squadlid heeft alles ingevuld. Met `{#if}` worden lege velden overgeslagen, zowel binnen de lijstjes als bij losse onderdelen zoals de Spotify-link. Zo ontstaan er geen lege regels of kapotte knoppen.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/persoon/%5BpersonId%5D/%2Bpage.svelte#L112-L120

**Foto met fallback**
De foto-url staat in een `$state`. Kan de afbeelding niet geladen worden, dan vuurt `onerror` af en wordt de bron vervangen door `/img-fallback.png`. Zo zie je nooit een kapotte afbeelding.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/persoon/%5BpersonId%5D/%2Bpage.svelte#L5-L7

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/persoon/%5BpersonId%5D/%2Bpage.svelte#L40

**Bio als HTML**

De bio wordt getoond met `{@html person.bio}`, zodat opmaak uit Directus behouden blijft.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/persoon/%5BpersonId%5D/%2Bpage.svelte#L62-L67

**Favoriete kleur**
De kleur komt als tekst uit Directus. Die waarde wordt direct als achtergrond van het kleurvlakje gezet met `style="background:{person.fav_color}"`.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/routes/persoon/%5BpersonId%5D/%2Bpage.svelte#L103-L109

### Filteren
<!-- Schrijf hier een stukje over de gebruikte technieken voor de functionaliteit filteren -->

### JavaScript
De logica zit in de `load`-functies en in de componenten.

- `fetch` met `await` of `.then()` om data uit Directus op te halen
- `filter()` om alleen de gekozen personen te tonen
- `[...array].sort()` met `localeCompare()` om op naam te sorteren
- `page.url.searchParams` om de gekozen filters uit de URL te lezen
- `new Date()` om de leeftijd uit de geboortedatum te berekenen
- `onerror` om een kapotte foto te vervangen door een fallback

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/lib/SquadList.svelte#L7-L20

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/a13c6dfdc13bc429348c459f7c92242ab2530b16/src/lib/SquadList.svelte#L22-L31

## Installatie
Om het project op te starten volg je de volgende stappen

1. clone het project
2. installeer de packages benodigd voor het project
   ```bash
   npm install
   ```
3. start het project lokaal op
   ```bash
   npm run dev
   ```

## Code conventies
Onze code conventies kan je hier vinden  
[Code conventies](https://github.com/Chewsy/your-tribe-for-life-squad-page/issues/22)

## Bronnen

- [Leertaak: Your Tribe for Life - Squad Page (wiki)](https://github.com/fdnd-task/your-tribe-for-life-squad-page/wiki)
- [SvelteKit Docs](https://svelte.dev/docs/kit/introduction)
- [Directus API Reference](https://directus.io/docs/api)
- [Code Conventies @ FDND Docs](https://docs.fdnd.nl/conventies.html)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
