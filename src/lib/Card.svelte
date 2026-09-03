<script>
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
    <img src={`https://fdnd.directus.app/assets/${person.mugshot}`} alt={person.name} width="200" height="200"/>
    
    <div class="info-bar">
      <div class="person-text">
        <h2>{person.name},</h2>
        <p>{age}</p>
      </div>
      <a href="/detailpage/{person.person_id}" title="Bekijk profiel van {person.name}">
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9906 10.9901L2.39088 19.5895C1.84383 20.1368 0.956895 20.1368 0.410117 19.5895C-0.136706 19.0427 -0.136706 18.1558 0.410117 17.609L8.01951 9.99986L0.410338 2.39095C-0.136484 1.84391 -0.136484 0.957105 0.410338 0.410283C0.95716 -0.136761 1.84405 -0.136761 2.3911 0.410283L10.9908 9.00983C11.2642 9.28337 11.4007 9.6415 11.4007 9.99981C11.4007 10.3583 11.2639 10.7167 10.9906 10.9901Z" fill="black"/></svg>
      </a>
    </div>
</article>

<style>

  * {
    box-sizing: border-box;
  }

  .student-card {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
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
        gap: .4em;
        padding-left: .3em;
        border-radius: 30px;


        h2 {
          font-size: 20px;
          font-weight: 300;
        }

        p {
          font-size: 20px;
          font-weight: 300;
        }
      }

      a {
        padding-right: .5em;
      }
    }

  }

</style>