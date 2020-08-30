import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import {
  getCountriesQuery,
  addDirectorMutation,
  getDirectorsQuery,
} from '../queries/queries';

const AddDirector = (props) => {
  const [name, setName] = useState('');
  const [countryID, setCountryID] = useState('');

  const displayCountries = () => {
    const data = props.getCountriesQuery;
    if (data.loading) {
      return <option disabled>Loading Countries</option>;
    } else {
      return data.countries.map((country) => {
        return (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        );
      });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addDirectorMutation({
      variables: {
        name: name,
        countryID: countryID,
      },
      refetchQueries: [{ query: getDirectorsQuery }],
    });
  };
  return (
    <form id='add-director' onSubmit={submitForm}>
      <div className='field'>
        <label>Director Name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='field'>
        <label>Country:</label>
        <select onChange={(e) => setCountryID(e.target.value)}>
          <option>Select country</option>
          {displayCountries()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default compose(
  graphql(getCountriesQuery, { name: 'getCountriesQuery' }),
  graphql(addDirectorMutation, { name: 'addDirectorMutation' })
)(AddDirector);
