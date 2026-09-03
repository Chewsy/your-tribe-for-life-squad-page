<script>
    let { person } = $props();
</script>


<article class="student-card">
    <img src={`https://fdnd.directus.app/assets/${person.mugshot}`} alt={person.name}/>
    <h2>{person.name}</h2>
    <p>{person.birthdate}</p>
    <a href="/detailpage/{person.person_id}" title="Bekijk profiel van {person.name}">
      <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9906 10.9901L2.39088 19.5895C1.84383 20.1368 0.956895 20.1368 0.410117 19.5895C-0.136706 19.0427 -0.136706 18.1558 0.410117 17.609L8.01951 9.99986L0.410338 2.39095C-0.136484 1.84391 -0.136484 0.957105 0.410338 0.410283C0.95716 -0.136761 1.84405 -0.136761 2.3911 0.410283L10.9908 9.00983C11.2642 9.28337 11.4007 9.6415 11.4007 9.99981C11.4007 10.3583 11.2639 10.7167 10.9906 10.9901Z" fill="black"/></svg>
    </a>
</article>

