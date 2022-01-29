import React, { useState } from 'react';
import Movie from './Movie';

// TODO:
// 1 - In the PartFifteen component, render a list of movies which each have
// a name and a rating property.

// 2 - Create a Movie component and import it into this file.
// Render the Movie component in here and pass it the name and rating of each movie

// 3 - Create a function called onClickDeleteMovie that takes the name of the movie
// as a parameter and updates the movies list to remove that movie.
// Pass onClickDeleteMovie as a prop into the Movie component
// Add a button into the Movie component, that when clicked calls onClickDeleteMovie

const PartFifteen = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The reason I jump',
      rating: 10,
    },
    {
      title: 'Lost in translation',
      rating: 7,
    },
    {
      title: 'Side effects',
      rating: '8',
    },
    {
      title: 'Gone girl',
      rating: '7',
    },
    {
      title: 'No time to die',
      rating: '6',
    },
    {
      title: 'After we collided',
      rating: '3',
    },
  ]);

  const onClickDeleteMovie = (title) => {
    const newMovies = movies.filter((movie) => {
      return movie.title !== title;
    });

    setMovies(newMovies);
  };

  return (
    <div>
      <h2>Welcome to my movie rating blog!</h2>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.title}
            title={movie.title}
            rating={movie.rating}
            onClickDeleteMovie={onClickDeleteMovie} />
        );
      })}
    </div>
  );
};

export default PartFifteen;
