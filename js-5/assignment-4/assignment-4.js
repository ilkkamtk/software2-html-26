'use strict';

const APIUrl = 'https://api.tvmaze.com/search/shows';
const searchForm = document.querySelector('form');
const queryField = document.querySelector('#query');
const results = document.querySelector('#results');

searchForm.addEventListener('submit', async function (evt) {
  try {
    evt.preventDefault();
    const query = queryField.value;
    const shows = await getTVShows(query);
    generateShows(shows);
  } catch (err) {
    console.error(err);
  }
});

async function getTVShows(query) {
  const response = await fetch(`${APIUrl}?q=${query}`);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  console.log(result);
  return result;
}

function generateShows(shows) {
  results.innerHTML = '';
  for (const tvShow of shows) {
    const h2 = document.createElement('h2');
    h2.innerText = tvShow.show.name;

    const a = document.createElement('a');
    a.href = tvShow.show.url;
    a.innerText = 'Link to show';
    a.target = '_blank';

    // let thumbnail = '';
    // if (tvShow.show.image === null) {
    //   thumbnail = 'https://placehold.co/210x295?text=Not%20Found';
    // } else {
    //   thumbnail = tvShow.show.image.medium;
    // }

    const img = document.createElement('img');
    // img.src = thumbnail;
    img.src = tvShow.show.image
      ? tvShow.show.image.medium
      : 'https://placehold.co/210x295?text=Not%20Found';
    img.alt = tvShow.show.name;

    const div = document.createElement('div');
    div.innerHTML = tvShow.show.summary;

    const genreDiv = document.createElement('div');
    genreDiv.innerText = 'Genres: ' + tvShow.show.genres.join(', ');

    const article = document.createElement('article');

    article.append(h2, img, a, div, genreDiv);
    results.append(article);
  }
}
