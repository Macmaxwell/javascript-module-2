/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
function showMovies() {
  movies.forEach(movie => {
    showMovie(movie)
  })
  showCountMovies()
}
function showMovie(movie){
  const movieP = document.createElement("p");
    movieP.textContent = movie.title + " - " + movie.director;
    const movieDiv = document.getElementById("all-movies");
    movieDiv.appendChild(movieP)
}
function showCountMovies(){
  let movieSpan = document.getElementById("movies-number")
  movieSpan.innerText = movies.length;
}
function addMovie(movie) {
  movies.push(movie)
  showMovie(movie) 
  showCountMovies()
 }

const myMovie = {
  title: "Cinema Paradiso",
  director: "Giuseppe Tornatore",
  type: "drama",
  haveWatched: true
}
setTimeout(showMovies , 1000);
setTimeout(()=>addMovie(myMovie), 2000)


const movieForm = document.getElementById("movieForm");

movieForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const movieTitle = document.getElementById("movieTitle");
  const movieDirector = document.getElementById("movieDirector");
  const movieType = document.getElementById("movieType");
  const movieSeen = document.getElementById("movieSeen");
  let newMovie = {
    title: movieTitle.value,
    director: movieDirector.value,
    type: movieType.value,
    haveWatched: movieSeen.value
  }
  addMovie(newMovie)
  movieTitle.value = "";
movieDirector.value = "";
movieType.value = "";
movieSeen.value = "";
})


// create a new movie object for your favorite movie


// create addMovies function
