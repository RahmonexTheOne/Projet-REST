import logo from './logo.svg';
import React from 'react';
import AddFilm from './components/AddFilm';
import FilmList from './components/FilmList';
import './App.css';

function App() {
  return (
    <div>
      <h1>Gestion des Films</h1>
      <AddFilm />
      <FilmList />
    </div>
  );
}

export default App;
