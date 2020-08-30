import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { addLanguageMutation, getLanguagesQuery } from '../queries/queries';

const AddLanguage = (props) => {
  const [name, setName] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    props.addLanguageMutation({
      variables: {
        name: name,
      },
      refetchQueries: [{ query: getLanguagesQuery }],
    });
  };
  return (
    <form className='language-form' id='add-language' onSubmit={submitForm}>
      <div className='field'>
        <label>Language name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <button>+</button>
    </form>
  );
};

export default compose(
  graphql(getLanguagesQuery, { name: 'getLanguagesQuery' }),
  graphql(addLanguageMutation, { name: 'addLanguageMutation' })
)(AddLanguage);
