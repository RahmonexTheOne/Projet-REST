import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddFilm from './components/AddFilm';
import FilmList from './components/FilmList';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container my-4">
        <header className="text-center">
          <h1 className="display-4">Pop Cinema</h1>
        </header>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/add" element={<AddFilm />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
