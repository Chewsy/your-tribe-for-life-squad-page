<script>
    import arrowIcon from '$lib/assets/arrow-to-right.svg';
    let { person } = $props();

    function calculateAge(birthDateString) {
        const birthDate = new Date(birthDateString);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        // If birthday has not occured this year yet, substract 1
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            years--;
        }

        return years;
    }

    const age = $derived(calculateAge(person.birthdate));

</script>


<article class="student-card">
  <a class="card-link" href="/persoon/{person.id}" aria-label={`Bekijk profiel van ${person.name}`}>
    <div class="portrait">
      <img src={person.image} alt={person.name} class="mugshot" width="320" height="240" />
    </div>

    <div class="info-bar">
      <div class="person-text">
        <h2>{person.name}</h2>
        <p>{age} jaar</p>
      </div>
      <span class="profile-arrow" aria-hidden="true">
        <img src={arrowIcon} alt="" class="arrow-icon" width="12" height="12" />
      </span>
    </div>
  </a>
</article>

<style>
  * {
    box-sizing: border-box;
  }

  .student-card {
    height: 100%;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 1rem;
    background: var(--white);
    box-shadow: 0 4px 12px #ddd;
  }

  .student-card:hover {
    box-shadow: 0 6px 16px #ccc;
  }

  .card-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: inherit;
    cursor: pointer;
  }

  .portrait {
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #dce3df;
  }

  .mugshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    min-height: 4.8rem;
    padding: 0.9rem 1rem;
  }

  .person-text h2 {
    overflow: hidden;
    font-weight: 700;
    font-size: 1.05rem;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .person-text p {
    margin-top: 0.25rem;
    color: #5b5d57;
    font-size: 0.875rem;
  }

  .card-link:focus-visible {
    outline: 3px solid var(--default-purple);
    outline-offset: -3px;
  }

  .profile-arrow {
    display: grid;
    flex: 0 0 auto;
    width: 2.25rem;
    height: 2.25rem;
    place-items: center;
    border-radius: 50%;
    background: var(--light-purple);
  }

  .arrow-icon {
    filter: brightness(0) invert(1);
  }

  .student-card:hover .profile-arrow {
    background: var(--default-purple);
  }
</style>