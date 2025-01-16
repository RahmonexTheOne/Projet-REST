import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // React Slick for horizontal scrolling
import './HomePage.css'; // Custom styles
import { Link } from 'react-router-dom';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://localhost:5000/films');
      setMovies(response.data);

      // Set the featured movie as the newest movie
      if (response.data.length > 0) {
        setFeaturedMovie(response.data[0]);
      }
    };
    fetchMovies();
  }, []);

  // Settings for the horizontal scroll slider
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };
  
  

  return (
    <div className="homepage">
      {/* Logo and Title */}
      <header className="homepage-header">
        <img src="/logo512.png" alt="Central Cinema Logo" className="logo-image" />
        <h1 className="logo">Central Cinema</h1>
      </header>

      {/* Featured Banner */}
      {featuredMovie && (
        <div
          className="featured-banner"
          style={{
            backgroundImage: `url(${featuredMovie.banner})`,
          }}
        >
          <div className="featured-content">
            <h2 className="featured-title">{featuredMovie.titre}</h2>
            <p className="featured-description">{featuredMovie.description || 'A must-watch movie!'}</p>
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
      )}

      {/* Movie Categories */}
      <section className="movie-category">
        <h2 className="category-title">Action Movies</h2>
        <Slider {...sliderSettings}>
          {movies
            .filter((movie) => movie.genre === 'Action') // Ensure only Action movies are shown
            .map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.banner} alt={movie.titre} className="movie-card-img" />
                </Link>
                <h3 className="movie-card-title">{movie.titre}</h3>
              </div>
            ))}
        </Slider>

      </section>

      <section className="movie-category">
        <h2 className="category-title">Science Fiction Movies</h2>
        <Slider {...sliderSettings}>
          {movies
            .filter((movie) => movie.genre === 'Science Fiction') // Ensure only Action movies are shown
            .map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.banner} alt={movie.titre} className="movie-card-img" />
                </Link>
                <h3 className="movie-card-title">{movie.titre}</h3>
              </div>
            ))}
        </Slider>
      </section>

      <section className="movie-category">
        <h2 className="category-title">Adventure Movies</h2>
        <Slider {...sliderSettings}>
          {movies
            .filter((movie) => movie.genre === 'Aventure') // Ensure only Action movies are shown
            .map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.banner} alt={movie.titre} className="movie-card-img" />
                </Link>
                <h3 className="movie-card-title">{movie.titre}</h3>
              </div>
            ))}
        </Slider>
      </section>

      <section className="movie-category">
        <h2 className="category-title">Drama Movies</h2>
        <Slider {...sliderSettings}>
          {movies
            .filter((movie) => movie.genre === 'Drama') // Ensure only Action movies are shown
            .map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.banner} alt={movie.titre} className="movie-card-img" />
                </Link>
                <h3 className="movie-card-title">{movie.titre}</h3>
              </div>
            ))}
        </Slider>
      </section>
    </div>
  );
}

export default HomePage;