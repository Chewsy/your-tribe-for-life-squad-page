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
    <img src={`https://fdnd.directus.app/assets/${person.mugshot}`} alt={person.name} class="mugshot" width="200" height="200"/>
    
    <div class="info-bar">
      <div class="person-text">
        <h2>{person.name},</h2>
        <p>{age}</p>
      </div>
      <a href="/detailpage/{person.person_id}">
        <img src={arrowIcon} alt="Bekijk profiel van {person.name} " class="arrow-icon" width="12" height="12"/> 
      </a>
    </div>
</article>

<style>

  * {
    box-sizing: border-box;
    font-family: "Gill Sans", sans-serif;
  }

  .student-card {
    display: flex;
    flex-direction: column;

    .mugshot {
      width: 100%;
      height: 150px;
      aspect-ratio: 1 / 1;
      object-fit: cover ;
      border-radius: 30px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border:1.5px solid black;
      border-bottom: 0;
    }

    .info-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 30px;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border:1.5px solid black;
      border-top: 0;

      .person-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: .25em;
        padding-left: .8em;
        border-radius: 30px;
        font-style: italic;

        h2 {
          font-size: 16px;
          font-weight: 500;
        }

        p {
          font-size: 16px;
          font-weight: 500;
        }
      }

      a {
        padding-right: .5em;

        .arrow-icon {
          font-size: 16px;
        }
      }
    }

  }

</style>