    <script>
    import closeIcon from '$lib/assets/close-icon.svg';
    import filterIcon from '$lib/assets/filter-icon.svg';
	import '$lib/styleguide.css';

    let {cities} = $props();
    </script>
    
    <button type="button" popovertarget="filter-popover">
      <img src={filterIcon} alt="Filter openen" width="25" height="25">
    </button>

    <form id="filter-popover" popover method="GET"
      action="/">

        <button type="button" popovertarget="filter-popover" popovertargetaction="hide">
          <img src={closeIcon} alt="Filter sluiten" width="20" height="20">
        </button>
        
      <fieldset>
        <legend>Squads</legend>
        <div>
          <label>
            <input type="checkbox" name="squad-I">
            Squad I
          </label>
          <label>
            <input type="checkbox" name="squad-J">
                Squad J
          </label>
        </div>
      </fieldset>

      <!-- DEZE IS UIT DE LIJST GEHAALD OMDAT HET TE LANG WERD
       HIER KUNNEN WE KNOPPEN VAN MAKEN BUITEN DE FILTER
      <fieldset>
        <legend>Alfabetisch</legend>
        <label for="name-sorting">A - Z</label>
        <input type="radio" name="name-sorting" value="a-z">
        <label for="name-sorting">Z - A</label>
        <input type="radio" name="name-sorting" value="z-a">
      </fieldset> -->

      <fieldset>
        <legend>Woonplaats</legend>
        <div>
          <select name="residency">
          <option value="">Alle woonplaatsen</option>
          {#each cities as city}
          <option value="{city}">{city}</option>
          {/each}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Leeftijd</legend>
        <div>
          <select name="age">
          <option value="">Alle leeftijden</option>
          <!-- <option value="{city}">{city}</option> -->
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Favoriete seizoen</legend>
        <div>
          <select name="season">
          <option value="">Alle seizoenen</option>
          <!-- <option value="{city}">{city}</option> -->
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Is de persoon kaal?</legend>
        <div>
          <label>
            <input type="radio" name="bold" value="yes">
            Ja<p>&#129458</p>
          </label>
          <label>
            <input type="radio" name="bold" value="no">
            Nee<p>&#128135</p>
          </label>
        </div>
      </fieldset>
      
      <button type="submit">Toepassen</button>

    </form>

    <style>

    form {
      padding: var(--space-md);
      border: 1px solid var(--dark-purple);
      max-height: 80dvh;
      overflow-y: auto;
      font-family: var(--font);
      color: var(--dark-purple);
      padding-right: var(--space-lg);
      padding-left: var(--space-lg);
    }

    form:popover-open {
      display: flex;
      flex-direction: column;
      place-self: center;
      gap: var(--space-xs);
      border-radius: 2rem;
      border: .5px solid var(--dark-purple);
    }

    button[popovertargetaction="hide"] {
      align-self: flex-end;
      border: 0;
      background: none;
      cursor: pointer;
      padding: 0;
      fill: var(--default-purple);
    }

    fieldset {
      border: 0;
      padding: var(--space-sm);
      padding-left: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    legend {
      font-size: 1.1rem;
      font-weight: 600;
      padding: var(--space-sm);
      padding-left: 0;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      justify-content: flex-start;
    }

    label {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      cursor: pointer;
    }

    input {
      font-size: var(--font-size);
    }

    input:checked {
      background-color: var(--light-purple);
    }

    button[type="submit"] {
      position: sticky;
      bottom: 0;
      padding: var(--space-sm);
      font-size: var(--font-size);
      background-color: var(--default-purple);
      color: var(--white);
    }

    </style>