"use sctrict";

let numberOfFilms;

function start () {
  numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

  while (numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
  }
}

start ();

const personalMovieDB = {
  count: answer,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

quirtMovies = [prompt("Один из последних просмотренных фильмов?", ""),prompt("На сколько оцените его?", ""), prompt("Один из последних просмотренных фильмов?", ""), prompt("На сколько оцените его?", "")];

function rememberMyFilms() {
  for (let i = 0; i < 2; i ++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""), /* a, b - техническая переменная */
        b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    }
    else {
      console.log('error)');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  }
  else if (personalMovieDB.count > 10 &&  personalMovieDB.count<30) {
    console.log("Вы классический зритель");
  }
  else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  }
  else {
    console.log("Произошла ошибка");
  }
}
detectPersonalLevel();

console.log(personalMovieDB);




function showMyDB () {
  if(!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres () {
  for (let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}:`);
  }
  return genres;
}

writeYourGenres ();
