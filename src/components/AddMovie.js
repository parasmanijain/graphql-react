import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import {
  getDirectorsQuery,
  getGenresQuery,
  addMovieMutation,
  getMoviesQuery,
  getLanguagesQuery,
} from '../queries/queries';

const AddMovie = (props) => {
  const [name, setName] = useState('');
  const [genreID, setGenreID] = useState('');
  const [languageID, setLanguageID] = useState('');
  const [year, setYear] = useState('');
  const [directorID, setDirectorID] = useState('');

  const displayDirectors = () => {
    const data = props.getDirectorsQuery;
    if (data.loading) {
      return <option disabled>Loading Directors</option>;
    } else {
      return data.directors.map((director) => {
        return (
          <option key={director.id} value={director.id}>
            {director.name}
          </option>
        );
      });
    }
  };
  const displayGenres = () => {
    const data = props.getGenresQuery;
    if (data.loading) {
      return <option disabled>Loading Genres</option>;
    } else {
      return data.genres.map((genre) => {
        return (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        );
      });
    }
  };
  const displayLanguages = () => {
    const data = props.getLanguagesQuery;
    if (data.loading) {
      return <option disabled>Loading Languages</option>;
    } else {
      return data.languages.map((language) => {
        return (
          <option key={language.id} value={language.id}>
            {language.name}
          </option>
        );
      });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addMovieMutation({
      variables: {
        name: name,
        genreID: genreID,
        languageID: languageID,
        directorID: directorID,
        year: year,
      },
      refetchQueries: [{ query: getMoviesQuery }],
    });
  };
  return (
    <form id='add-movie' onSubmit={submitForm}>
      <div className='field'>
        <label>Movie name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='field'>
        <label>Year:</label>
        <input type='text' onChange={(e) => setYear(e.target.value)} />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <select onChange={(e) => setGenreID(e.target.value)}>
          <option>Select genre</option>
          {displayGenres()}
        </select>
      </div>
      <div className='field'>
        <label>Language:</label>
        <select onChange={(e) => setLanguageID(e.target.value)}>
          <option>Select language</option>
          {displayLanguages()}
        </select>
      </div>
      <div className='field'>
        <label>Director:</label>
        <select onChange={(e) => setDirectorID(e.target.value)}>
          <option>Select director</option>
          {displayDirectors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default compose(
  graphql(getGenresQuery, { name: 'getGenresQuery' }),
  graphql(getLanguagesQuery, { name: 'getLanguagesQuery' }),
  graphql(getDirectorsQuery, { name: 'getDirectorsQuery' }),
  graphql(addMovieMutation, { name: 'addMovieMutation' })
)(AddMovie);
