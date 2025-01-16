import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css'; // Import the updated CSS

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieResponse = await axios.get(`http://localhost:5000/films/${id}`);
        setMovie(movieResponse.data);

        const availabilityResponse = await axios.get(`http://localhost:5000/films/${id}/availability`);
        setAvailability(availabilityResponse.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details-container">
      {/* Left Section */}
      <div className="movie-details-left">
        <h1>{movie.titre}</h1>
        <p className="movie-description">{movie.description || 'No description available.'}</p>
        <h2>Trailer</h2>
        {movie.trailer ? (
          <iframe
            src={movie.trailer}
            title="Trailer"
            className="movie-trailer"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available.</p>
        )}

        <h2>Cinemas and Showtimes</h2>
        {availability.length > 0 ? (
          <ul className="movie-availability">
            {availability.map((slot) => (
              <li key={slot.id}>
                <strong>{slot.cinema_name}</strong> - {slot.date} at {slot.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No availability found.</p>
        )}
      </div>

      {/* Right Section */}
      <div className="movie-details-right">
        <img src={movie.banner} alt={movie.titre} className="movie-banner" />
        <div className="movie-info">
          <h3>Initial Release</h3>
          <p>{movie.release_date || 'N/A'}</p>
          <h3>Duration</h3>
          <p>{movie.duree} minutes</p>
          <h3>Director</h3>
          <p>{movie.realisateur}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
