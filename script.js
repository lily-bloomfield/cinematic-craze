const moviesData = [
  {
    id: 1,
    name: "The Idea of You",
    duration: "116m",
    genre: ["Romance", "Comedy", "Music"],
    countryOrigin: "",
    imgUrl:
      "https://img.myflixerz.to/xxrz/250x400/201/da/8b/da8bd47bd5ebd4d4460303d30af5e738/da8bd47bd5ebd4d4460303d30af5e738.jpg",
    imdbRating: 6.5,
    type: "movie",
    trailer: "url",
    releaseDate: [16, 3, 2024], //day, month, yr
  },
];

const trendingMoviesContainer = document.querySelector(
  ".trending-movies-container"
);
const latestMoviesContainer = document.querySelector(
  ".latest-movies-container"
);
const displayMovies = (para) => {
  for (let i = 0; i < 24; i++) {
    const trendingMovies = document.createElement("div");
    const movieImg = document.createElement("img");
    const movieTitle = document.createElement("h4");
    const movieInfo = document.createElement("p");
    const playBtn = document.createElement("i");

    movieImg.classList.add("movie-img");
    movieInfo.classList.add("trending-movies-p");
    trendingMovies.classList.add("trending-movies-div");
    playBtn.classList.add("fa-solid", "fa-circle-play");
    trendingMovies.append(movieImg, playBtn, movieTitle, movieInfo);
    if (para === "default") {
      trendingMoviesContainer.append(trendingMovies);
    } else if (para === "latest") {
      latestMoviesContainer.append(trendingMovies);
    }

    movieImg.setAttribute("src", moviesData[0].imgUrl);
    movieTitle.textContent = moviesData[0].name;
    movieInfo.textContent = `2024  |  ${moviesData[0].duration}`;
  }
};
displayMovies("default");
displayMovies("latest");
