import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote > 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className='movie'>
    <img
      src={
        poster_path
          ? IMG_API + poster_path
          : "https://img.pngio.com/popcorn-background-hd-png-transparent-9434-free-icons-and-png-popcorn-transparent-background-1181_1509.png"
      }
      alt={title}
    />
    <div className='movie-info'>
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        &#9733; {vote_average > 0 ? ` ${vote_average.toFixed(1)}` : "N/A"}
      </span>
    </div>
    <div className='movie-over'>
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
