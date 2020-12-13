import React from 'react';
import './App.css';

import { Container } from 'reactstrap';

import { MovieProvider } from './MovieContext/MovieContext';

import { Nav } from './Nav';
import MovieList from './MovieList/MovieList';
import { AddMovie } from './AddMovie';

function App() {
  return (
    <MovieProvider>
      <Container>
        <div className="App">
          {/*Todo estos componentes tendrán la data de MovieContext*/}
          <Nav />
          <AddMovie />
          <MovieList />
        </div>
      </Container>
    </MovieProvider>
  );
}

export default App;
