import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import the home icon
import './MovieDetails.css'; // Import the updated CSS

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // For navigation
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

  // Group availability by cinema name
  const groupedAvailability = availability.reduce((acc, curr) => {
    if (!acc[curr.cinema_name]) {
      acc[curr.cinema_name] = [];
    }
    acc[curr.cinema_name].push(curr);
    return acc;
  }, {});

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details-container">
      {/* Return to Home */}
      <button
        className="return-home-button"
        onClick={() => navigate('/')} // Navigate to the home page
      >
        <FontAwesomeIcon icon={faHome} /> {/* Replace text with icon */}
      </button>

      {/* Left Section */}
      <div className="movie-details-left">
        <h1 className="movie-title">{movie.titre}</h1>
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
          <div className="cinema-availability">
            {Object.keys(groupedAvailability).map((cinema) => (
              <div key={cinema} className="cinema-section">
                <h4 className="cinema-name">{cinema}</h4>
                <div className="showtime-boxes">
                  {groupedAvailability[cinema].map((slot) => (
                    <div key={slot.id} className="showtime-box">
                      {new Date(slot.date).toLocaleDateString()} - {slot.time}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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