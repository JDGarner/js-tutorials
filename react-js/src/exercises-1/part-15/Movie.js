import React from 'react';

const Movie = ({ title, rating, onClickDeleteMovie }) => {
  return (
    <div>
      <h4>{title}</h4>
      <h4>rating: {rating}/10</h4>
      <button onClick={() => onClickDeleteMovie(title)} type="button">Delete movie</button>
    </div>
  );
};

export default Movie;
