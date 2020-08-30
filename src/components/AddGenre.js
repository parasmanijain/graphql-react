import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { addGenreMutation, getGenresQuery } from '../queries/queries';

const AddGenre = (props) => {
  const [name, setName] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    props.addGenreMutation({
      variables: {
        name: name,
      },
      refetchQueries: [{ query: getGenresQuery }],
    });
    setName('');
  };
  return (
    <form className='genre-form' id='add-genre' onSubmit={submitForm}>
      <div className='field'>
        <label>Genre name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <button className='add-button'>+</button>
    </form>
  );
};

export default compose(
  graphql(getGenresQuery, { name: 'getGenresQuery' }),
  graphql(addGenreMutation, { name: 'addGenreMutation' })
)(AddGenre);
