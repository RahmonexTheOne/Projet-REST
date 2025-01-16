import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddFilm from './components/AddFilm';
import HomePage from './components/HomePage';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddFilm />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
