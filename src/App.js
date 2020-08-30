import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import MovieList from './components/MovieList';
import AddGenre from './components/AddGenre';
import AddLanguage from './components/AddLanguage';
import AddCountry from './components/AddCountry';
import AddDirector from './components/AddDirector';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});
function App() {
  const [selected, setSelected] = useState('0');
  function clickAlert(param) {
    if (param) {
      console.log(param);
      setSelected(param);
    }
  }
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Movie List</h1>
        <div className='container'>
          <div className='left-panel'>
            <AddGenre />
            <AddLanguage />
            <AddCountry />
            <AddDirector />
            <AddMovie />
          </div>
          <div className='middle-panel'>
            <MovieList onChildClick={clickAlert} />
          </div>
          <div className='right-panel'>
            <MovieDetails movieID={selected} />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
