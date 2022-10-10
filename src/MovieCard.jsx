import React from "react";

const MovieCard = ({Year,Poster,Title,Type}) => {
  // console.log(movie);
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img src={Poster == "N/A" ? "https://via.placeholder.com/400":Poster } alt={Title} />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
