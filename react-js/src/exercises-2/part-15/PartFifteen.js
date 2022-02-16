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
      title: 'The Dark Knight',
      rating: 9,
    },
    { title: 'Parasite',
      rating: 8.5,

    },
    {
      title: 'Into the Wild',
      rating: 8,
    },
    {
      title: 'Saving Christmas',
      rating: 2.1,
    },
    {
      title: '365 Days',
      rating: 3,
    },
    {
      title: 'Clifford The Big Red Dog',
      rating: 6,
    },
    {
      title: 'The Kissing Boot',
      rating: 6.5,
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
      <h1>My movie blog</h1>
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
