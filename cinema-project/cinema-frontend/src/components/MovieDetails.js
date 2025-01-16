import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/films/${id}`);
        setMovie(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h2>{movie.titre}</h2>
      <p><strong>Duration:</strong> {movie.duree} minutes</p>
      <p><strong>Language:</strong> {movie.langue}</p>
      <p><strong>Subtitles:</strong> {movie.sous_titres || 'N/A'}</p>
      <p><strong>Director:</strong> {movie.realisateur}</p>
      <p><strong>Actors:</strong> {movie.acteurs}</p>
      <p><strong>Minimum Age:</strong> {movie.age_minimum}</p>
    </div>
  );
}

export default MovieDetails;