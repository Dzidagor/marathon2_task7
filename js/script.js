"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);
let personalMovieDB = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
};
let movie = prompt('Один из последних просмотренных фильмов');
let rating = prompt('На сколько оцените его?');
personalMovieDB.movies[movie] = rating;
movie = prompt('Один из последних просмотренных фильмов');
rating = prompt('На сколько оцените его?');
personalMovieDB.movies[movie] = rating;
console.log(personalMovieDB);