const urls = [
  "https://swapi.dev/api/films/1/",
  "https://swapi.dev/api/films/2/",
  "https://swapi.dev/api/films/3/"
];

Promise.all(urls.map(url => fetch(url).then(response => response.json())))
  .then(films => {
    const arrPlanetUrls = films.reduce((urls, film) => urls.concat(film.planets), []);
    return Promise.all(arrPlanetUrls.map(url => fetch(url).then(response => response.json())));
  })
  .then(planets => {
    const arrPlanets = []
    planets.forEach(planet => arrPlanets.push(planet.name));
    const filterRepeatedPlanets = [...new Set(arrPlanets)]
    console.log(filterRepeatedPlanets.join('\n'))
  })
  .catch(() => {
    fetch("https://swapi.dev/api/starships/9/")
      .then(response => response.json())
      .then(resp => console.log(resp.name + " все уничтожил"));
  });
