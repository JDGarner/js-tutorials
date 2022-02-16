import React from 'react';

const Movie = ({ title, rating, onClickDeleteMovie }) => {
  return (
    <div>
      <h3>Title: {title}</h3>
      <h5>Rating: {rating}/10</h5>
      <button type="button" onClick={() => onClickDeleteMovie(title)}>Delete movie</button>
    </div>
  );
};

export default Movie;
