'use strict';

const movies = [];

let more = true;

while (more) {
  const title = prompt('Input movie title');
  const rating = prompt('Input rating from 1-5');
  const movie = {title, rating};
  movies.push(movie);
  more = confirm('Input more');
}

function sortMovies(a, b) {
  const compare = b.rating - a.rating;
  return compare;
}

movies.sort(sortMovies);

for (const movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('target').append(tr);
}

const fav = movies[0];
document.getElementById('fav').innerText = fav.title;
