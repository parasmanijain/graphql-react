import React from 'react';
import { graphql } from 'react-apollo';
import { getMovieQuery } from '../queries/queries';

const MovieDetails = (props) => {
  const displayMovieDetails = () => {
    const { movie } = props.data;
    if (movie) {
      return (
        <div>
          <h2>
            {movie.name} ({movie.year})
          </h2>
          <p>Language: {movie.language.name} </p>
          <p>Genre: {movie.genre.name} </p>
          <p>
            Director: {movie.director.name} ({movie.director.country.name})
          </p>
          <p>Other Movies by this director:</p>
          <ul className='other-movies'>
            {movie.director.movies.map((item) => {
              if (item.name !== movie.name) {
                return (
                  <li key={item.id}>
                    {item.name} ({item.year})
                  </li>
                );
              } else {
                return <div id='no-data'></div>;
              }
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No movie selected...</div>;
    }
  };
  return (
    <div className='movie-details' id='movie-details'>
      {displayMovieDetails()}
    </div>
  );
};

export default graphql(getMovieQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.movieID,
      },
    };
  },
})(MovieDetails);
