"use sctrict";

const answer = +prompt("Сколько фильмов вы уже просмотрели?", "");
let numberOfFilms = answer;

const personalMovieDB = {
  count: answer,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""), /* a, b - техническая переменная */
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);