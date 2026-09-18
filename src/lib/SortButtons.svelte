<script>
  let { sortOrder, onSort } = $props();
</script>

<div class="sorting-buttons-wrapper">
  <button
    type="button"
    class:active={sortOrder === "asc"}
    onclick={() => onSort("asc")}
    >A - Z
  </button>

  <button
    type="button"
    class:active={sortOrder === "desc"}
    onclick={() => onSort("desc")}
    >Z - A
  </button>
</div>

<style>
  .sorting-buttons-wrapper {
    display: flex;
    flex-direction: row;
    gap: var(--space-sm);
  }

  button {
    padding: var(--space-sm) var(--space-md);
    font-size: var(--font-size);
    font-weight: var(--bold);
    background-image: linear-gradient(
      to right,
      var(--default-purple),
      var(--light-purple)
    );
    border: none;
    border-radius: var(--radius);
    width: 4.5rem;
    color: var(--white);
    box-shadow: var(--light-purple) 0px 0px 10px 2px;
    margin-bottom: var(--space-lg);
  }

  button:hover,
  button:focus-visible {
    background-image: none;
    background-color: var(--light-purple);
  }

  button.active {
    background-image: none;
    background-color: var(--default-purple);
    box-shadow: var(--default-purple) 0px 0px 10px 2px;
  }
</style>
