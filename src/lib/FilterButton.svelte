    <script>
    import closeIcon from '$lib/assets/close-icon.svg';
    import filterIcon from '$lib/assets/filter-icon.svg';

    let {cities} = $props();
    </script>
    
    <button type="button" popovertarget="filter-popover">
      <img src={filterIcon} alt="Filter openen" width="25" height="25">
    </button>

    <form id="filter-popover" popover method="GET"
      action="/">

        <button type="button" popovertarget="filter-popover" popovertargetaction="hide">
          <img src={closeIcon} alt="Filter sluiten" width="25" height="25">
        </button>

        <h3>Squads</h3>

      <div>
        <label for="squads">Squad I</label>
        <input type="checkbox" name="squad-I">
        <label for="squads">Squad J</label>
        <input type="checkbox" name="squad-J">
      </div>

      <div>
        <label for="residency">Woonplaats</label>
          <select name="residency">
          <option value="">Alle woonplaatsen</option>
          {#each cities as city}
          <option value="{city}">{city}</option>
          {/each}
          </select>
          </div>

      <button type="submit">Toepassen</button>


    </form>