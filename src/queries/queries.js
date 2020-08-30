import { gql } from 'apollo-boost';

const getGenresQuery = gql`
  {
    genres {
      name
      id
    }
  }
`;

const getCountriesQuery = gql`
  {
    countries {
      name
      id
    }
  }
`;

const getLanguagesQuery = gql`
  {
    languages {
      name
      id
    }
  }
`;

const getMoviesQuery = gql`
  {
    movies {
      name
      id
    }
  }
`;

const getDirectorsQuery = gql`
  {
    directors {
      name
      id
    }
  }
`;

const addGenreMutation = gql`
  mutation($name: String!) {
    addGenre(name: $name) {
      name
      id
    }
  }
`;

const addLanguageMutation = gql`
  mutation($name: String!) {
    addLanguage(name: $name) {
      name
      id
    }
  }
`;

const addCountryMutation = gql`
  mutation($name: String!) {
    addCountry(name: $name) {
      name
      id
    }
  }
`;

const addDirectorMutation = gql`
  mutation($name: String!, $countryID: ID!) {
    addDirector(name: $name, countryID: $countryID) {
      name
      id
    }
  }
`;

const addMovieMutation = gql`
  mutation(
    $name: String!
    $year: String!
    $genreID: ID!
    $languageID: ID!
    $directorID: ID!
  ) {
    addMovie(
      name: $name
      year: $year
      genreID: $genreID
      languageID: $languageID
      directorID: $directorID
    ) {
      name
      id
    }
  }
`;

const getMovieQuery = gql`
  query($id: ID!) {
    movie(id: $id) {
      id
      name
      year
      genre {
        name
      }
      language {
        name
      }
      director {
        id
        name
        country {
          name
        }
        movies {
          name
          year
          id
        }
      }
    }
  }
`;

export {
  getGenresQuery,
  getCountriesQuery,
  getLanguagesQuery,
  getDirectorsQuery,
  getMoviesQuery,
  addMovieMutation,
  addGenreMutation,
  addLanguageMutation,
  addCountryMutation,
  addDirectorMutation,
  getMovieQuery,
};
