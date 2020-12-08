import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Container } from 'reactstrap';

import { MovieProvider } from './MovieContext/MovieContext';

import Nav from './Nav/Nav';
import MovieList from './MovieList/MovieList';
import AddMovie from './AddMovie/AddMovie';

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
