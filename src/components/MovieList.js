import React from 'react';
import { graphql } from 'react-apollo';
import { getMoviesQuery } from '../queries/queries';

const MovieList = (props) => {
  const displayMovies = () => {
    const data = props.data;
    if (data.loading) {
      return <div>Loading movies...</div>;
    } else {
      return data.movies.map((movie) => {
        return (
          <li key={movie.id} onClick={() => props.onChildClick(movie.id)}>
            {movie.name}
          </li>
        );
      });
    }
  };

  return (
    <div className='movie-list-container'>
      <div className='movie-list'>
        <ul id='movie-list'>{displayMovies()}</ul>
        <div>
          Total Movies Watched:
          {props.data.movies ? props.data.movies.length : 0}
        </div>
      </div>
    </div>
  );
};

export default graphql(getMoviesQuery)(MovieList);
