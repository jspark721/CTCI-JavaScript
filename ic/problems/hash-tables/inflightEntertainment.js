/**
 * you've built an inflight entertainment system with on-demand movie streaming
 *
 * users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending
 *
 * write a function that takes an integer flightLength (in minutes), and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLength whose sum equals flightLength
 *
 * assume your users will watch exactly two movies
 * don't make your users watch the same movie twice
 * optimize for runtime over memory
 */

/*
input: number & array
output: boolean
constraints: optimize
edge cases: no duplicate movies, empty movie list, or short flight time

example

flightLength = 180 minutes
movies = [60, 110, 70, 90, 120];

return true because 60 + 120 = 180
110 + 70 = 180

*/

const inFlightEntertainment = (flightTime, movies) => {
  if (movies.length === 0) {
    return false;
  }

  let hash = {};
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    hash[movie] = i;
    if (hash[flightTime - movie]) {
      return true;
    }
  }
  console.log(hash);
  return false;
};

console.log(inFlightEntertainment(180, [60, 110, 70, 90, 120])); //true
console.log(inFlightEntertainment(100, [60, 110, 70, 90, 120])); //false

//we can also use a Set instead of a hash table

const canTwoMoviesFillFlight = (flightTime, movies) => {
  //edge case -- if there are no movies
  if (movies.length === 0) {
    return false;
  }

  let movieSet = new Set();

  for (let i = 0; i < movies.length; i++) {
    let firstMovie = movies[i];
    let matchingSecondMovie = flightTime - firstMovie;

    if (movieSet.has(matchingSecondMovie)) {
      return true;
    }
    movieSet.add(firstMovie);
  }
  return false;
};

console.log(canTwoMoviesFillFlight(200, [110, 80, 210, 150, 120])); //return true
console.log(canTwoMoviesFillFlight(180, [120, 40, 75, 110, 80])); //return false

//time complexity: O(n) -- going over the movies array once
//space complexity: O(n) -- optimizing runtime so we had to take extra space creating a set/hashtable
