document.addEventListener("DOMContentLoaded", function () {
  const apiKey = `6d1c6613688dfb822a0100f7a702697b`;
  // trending movies & series (all)
  const urlTrending = "https://api.themoviedb.org/3/trending/all/day?";
  //latest movies $ series
  const urlLatestTv = `https://api.themoviedb.org/3/discover/tv?`;
  const urlLatestMovies = `https://api.themoviedb.org/3/discover/movie?`;
  //comming soon
  const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?`;

  const bodyContainer = document.querySelector("body");
  const trendingMoviesContainer = document.querySelector(
    ".trending-movies-container"
  );
  const latestSeriesContainer = document.querySelector(
    ".latest-movies-container"
  );
  const upcomingContainer = document.querySelector(
    ".upcoming-movies-container"
  );
  const movieDatas = async (urlPara, para) => {
    const url = `${urlPara}api_key=${apiKey}`;
    const data = await fetch(url);
    const dataFromServer = await data.json();

    console.log(dataFromServer.results);
    const movieData = dataFromServer.results;
    movieData.map((src) => {
      const imgPoster = src.backdrop_path;
      const movieName = src.original_title || src.original_name;
      // console.log(imgPoster, movieName);

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
      if (para === "trendingMovies") {
        trendingMoviesContainer.append(trendingMovies);
      } else if (para === "latest") {
        latestSeriesContainer.append(trendingMovies);
      } else if (para === "upcoming") {
        upcomingContainer.append(trendingMovies);
      }
      // trendingMoviesContainer.append(trendingMovies);

      movieImg.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500${imgPoster}`
      );
      movieTitle.textContent = movieName;
      movieInfo.textContent = `2024  |  116m`;

      //clicked movie
      trendingMovies.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("clicked");
        window.location.href = "detail.html";
      });
    });
  };
  movieDatas(urlTrending, "trendingMovies");
  movieDatas(urlLatestTv, "latest");
  movieDatas(urlUpcoming, "upcoming");
});
