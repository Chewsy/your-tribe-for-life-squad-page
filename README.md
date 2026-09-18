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
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Wij hebben als team een ontwerp gemaakt en daar van een werkend squadpage van gemaakt waarin de gebruiker alle jaar tweedejaars squadleden te zien zijn, met per student een eigen detailpagina.

De data wordt live opgehaald uit Directus en gebouwt met SvelteKit. Je kunt de squad sorteren op naam. Ook kan je filteren op woonplaats, favoriete seizoen en of de squadlid kaal is of niet. Als je op iemand klikt, krijg je de detailpagina te zien.

## Gebruik
Op de overzichtspagina staat de hele squad als een grid van kaarten, voorgesorteerd op naam oplopend. Via de filterknop kun je filteren op woonplaats, favoriete seizoen en of de persoon kaal is of niet.

Elke kaart is een link naar de detailpagina van de aangeklikte squadlid waar meer informatie in staat. Bestaat de squadlid niet, dan krijgt de gebruiker een 404 pagina te zien.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

### Directus (headless CMS)
De app haalt de studentendata op uit de Directus API (`https://fdnd.directus.app/items/person?filter[squads][squad_id][cohort][_eq]=2627`) en filtert op de juiste cohort.

https://github.com/Chewsy/your-tribe-for-life-squad-page/blob/09947ff1ac4b3dc88d9fa00e2359d6e47055ce0f/src/routes/%2Bpage.server.js#L1-L19

### SvelteKit (framework)
Routing is opgebouwd met een dynamische route (`/persoon/[personId]`) voor de detailpagina's. De website maakt gebruik van herbruikbare componenten:
- Card
- SkeletonCard
- SquadList
- SortButtons
- FilterButton
- Navigation
- Footer

### Overzichtspagina**
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


### Navigatie
<!-- Schrijf hier een stukje over de gebruikte technieken voor de navigatie -->

### Detailpagina
<!-- Schrijf hier een stukje over de gebruikte technieken voor de detailpagina -->

### Filteren
<!-- Schrijf hier een stukje over de gebruikte technieken voor de functionaliteit filteren -->

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
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
