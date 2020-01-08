const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.moviesByTitle = function(films) {
  const result = films.map((film) => {
    return film.title
  })
  return result
}

Cinema.prototype.findByTitle = function(films, title) {
  const result = films.filter((film) => {
    if (film.title === title) {
      return true
    }
  })
  return result;
}

Cinema.prototype.findByGenre = function(films, genre) {
  const result = films.filter((film) => {
    if (film.genre === genre) {
      return true
    };
  });
  return result;
};

Cinema.prototype.findByYear = function(films, year) {
  const result = films.filter((film) => {
    if (film.year === year) {
      return true;
    };
  })
  return result;
}

Cinema.prototype.checkLength = function (films, length) {
  const result = films.filter((film) => {
    if (film.length >= length) {
      return true;
    }
  })
  return result;
}

Cinema.prototype.totalTime = function (films) {
  const filmLengths = films.map((film) => {
    return film.length
  })
  const result = filmLengths.reduce((totalTime, length) => {
    return totalTime + length;
  }, 0);
  return result
}

// Cinema.prototype.moviesByTitle = function (films) {
//   const result = films.map(film => film.title)
// };
// console.log(moviesByTitle(cinema));


module.exports = Cinema;
