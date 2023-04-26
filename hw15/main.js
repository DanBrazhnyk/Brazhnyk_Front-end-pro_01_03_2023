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
    planets.forEach(planet => console.log(planet.name));
  })
  .catch(() => {
    fetch("https://swapi.dev/api/starships/9/")
      .then(response => response.json())
      .then(resp => console.log(resp.name + " все уничтожил"));
  });
