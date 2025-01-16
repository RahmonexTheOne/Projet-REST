import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddFilm from './components/AddFilm';
import HomePage from './components/HomePage';
import MovieDetails from './components/MovieDetails';
import ModeratorPage from './components/ModeratorPage';
import EditFilmPage from './components/EditFilmPage';
import AddFilmPage from './components/AddFilmPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddFilm />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/moderator" element={<ModeratorPage />} />
        <Route path="/moderator/edit/:id" element={<EditFilmPage />} />
        <Route path="/moderator/add" element={<AddFilmPage />} />
      </Routes>
    </Router>
  );
}

export default App;
