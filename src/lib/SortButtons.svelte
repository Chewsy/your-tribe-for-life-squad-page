<script>

</script>
     
    <div class="sorting-buttons-wrapper">
        <button type="button">A - Z</button>

        <button type="button">Z - A</button>
    </div>

    
<style>
    .sorting-buttons-wrapper {
      display: flex;
      flex-direction: row;
      gap: .8rem;
    }

    button {
      padding: var(--space-sm) var(--space-md);
      font-size: var(--font-size);
      font-weight: 600;
      background-image: linear-gradient(to right,
       var(--default-purple), 
       var(--light-purple)
       );
      border: none;
      border-radius: .6rem;
      width: 4.5rem;
      color: var(--white);
      box-shadow: var(--light-purple) 0px 0px 10px 2px;
    }

    button:hover,
    button:focus-visible {
      background-image: none;
      background-color: var(--light-purple);
    }

    button.active,
    button:active
     {
      background-image: none;
      background-color: var(--default-purple);
      box-shadow: var(--default-purple) 0px 0px 10px 2px;
    }

</style>