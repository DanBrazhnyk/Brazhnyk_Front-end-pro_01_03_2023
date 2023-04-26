    const apiFunc = (url, results = []) => {
    return fetch(url)
    .then((response) => response.json())
    .then((resp) => {
        results.push(...resp.results);
        if (resp.next !== null) {
        return apiFunc(resp.next, results);
        } else {
        return results;
        }
    });
};
    apiFunc('https://swapi.dev/api/people/')
    .then((results) => {
    const infoHeroes = results.map((character) => ({
        name: character.name,
        mass: character.mass,
        height: character.height,
        gender: character.gender,
        films: character.films,
    }));
    const moreThanThreeFilms = infoHeroes.filter(
        (hero) => hero.films.length > 3);
    console.log(moreThanThreeFilms);
    })
    .catch((error) => {
    console.error(error);
    });