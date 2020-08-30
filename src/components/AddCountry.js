import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { addCountryMutation, getCountriesQuery } from '../queries/queries';

const AddCountry = (props) => {
  const [name, setName] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    props.addCountryMutation({
      variables: {
        name: name,
      },
      refetchQueries: [{ query: getCountriesQuery }],
    });
  };
  return (
    <form className='country-form' id='add-country' onSubmit={submitForm}>
      <div className='field'>
        <label>Country name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <button>+</button>
    </form>
  );
};

export default compose(
  graphql(getCountriesQuery, { name: 'getCountriesQuery' }),
  graphql(addCountryMutation, { name: 'addCountryMutation' })
)(AddCountry);
