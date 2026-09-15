    <script>
    import closeIcon from '$lib/assets/close-icon.svg';
    import filterIcon from '$lib/assets/filter-icon.svg';
	  import '$lib/styleguide.css';

    let {cities, seasons} = $props();

    function hideFilter(event) {
      event.currentTarget.hidePopover();
    }
    </script>
    
    <button type="button" popovertarget="filter-popover" class="filter-button">
      <img src={filterIcon} alt="Filter openen" width="25" height="25">
    </button>

    <form id="filter-popover" popover method="GET" action="/" onsubmit={hideFilter}>

      <button type="button" popovertarget="filter-popover" popovertargetaction="hide">
        <img src={closeIcon} alt="Filter sluiten" width="20" height="20">
      </button>

      <fieldset>
        <legend>Woonplaats</legend>
        <div>
          <select name="residency">
          <option value="">Alle woonplaatsen</option>
          {#each cities as city}
          <option value={city}>{city}</option>
          {/each}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Favoriete seizoen</legend>
        <div>
          <select name="season">
          <option value="">Alle seizoenen</option>
          {#each seasons as season}
          <option value={season}>{season}</option>
          {/each}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Is de persoon kaal?</legend>
        <div>
          <label>
            <input type="radio" name="bold" value="" checked>
            Alle
          </label>
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
      gap: var(--space-sm);
      border-radius: 2rem;
      border: none;
      box-shadow:  
        0 0 12px rgba(255, 255, 255, 0.9),
        0 0 30px rgba(255, 255, 255, 0.5),
        0 8px 24px rgba(0, 0, 0, 0.15);
    }

	  .filter-button img {
		  width: 1.5rem;
		  height: 1.5rem;
		  flex: 0 0 auto;
		  fill: none;
		  stroke-linecap: round;
		  stroke-linejoin: round;
		  stroke-width: 1.75;
	  }

	  .filter-button {
		  display: grid;
		  place-items: center;
		  width: 2.75rem;
		  height: 2.75rem;
		  padding: 0;
		  border: 1px solid #ccc;
		  border-radius: 50%;
		  background: var(--light-purple);
		  color: white;
		  cursor: pointer;
	  }

	  .filter-button:focus-visible {
		  outline: 3px solid var(--default-purple);
		  outline-offset: 3px;
	  }

	  .filter-button:hover {
		  background: var(--default-purple);
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
      padding-bottom: var(--space-md);
    }

    legend {
      font-size: 1.1rem;
      font-weight: 600;
      padding: var(--space-sm);
      padding-left: 0;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: var(--space-md);
      justify-content: flex-start;
      padding-bottom: var(--space-xs);
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

    button[type="submit"] {
      position: sticky;
      bottom: 0;
      padding: var(--space-sm);
      margin-bottom: var(--space-sm);
      font-size: var(--font-size);
      border: none;
      box-shadow: var(--light-purple) 0px 0px 10px 2px;
      border-radius: .6rem;
      background: linear-gradient(to right,
      var(--default-purple),
      var(--light-purple)
      );
      color: var(--white);
      font-weight: 600;
      text-shadow:
        0 0 2px rgba(255, 255, 255, 0.6),
        0 0 1px rgba(255, 255, 255, 0.25);
    }

    input[type="radio"] {
      appearance: none;
      width: 1.5rem;
      height: 1.5rem;
      border: 2px solid var(--default-purple);
      border-radius: 0.5rem;
      cursor: pointer;
      display: grid;
      place-content: center;
      margin: 0;
    }

    input[type="radio"]:checked {
      background-color: var(--default-purple);
    }

    input[type="radio"]:checked::after {
      content: "✓";
      color: var(--white);
      font-size: 1rem;
      font-weight: bold;
    }

    select {
      appearance: none;
      width: 100%;
      border: 1px solid var(--default-purple);
      border-radius: 0.6rem;
      padding:  var(--space-sm);
      font-size: var(--font-size);
      color: var(--dark-purple);
      background-color: white;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236d28d9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>");
      background-repeat: no-repeat;
      background-position: right var(--space-sm) center;
      background-size: 1rem;
      cursor: pointer;
    }

    select:focus {
      outline: none;
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--default-purple) 20%, transparent);
    }
    </style>