import '../css/main.css';
import { useState, useEffect } from 'react';
import { MovieCard } from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
        const response = await fetch('https://www.omdbapi.com/?s=james+bond&apikey=7138b361&type=movie');
        const data = await response.json();
        const movieIds = data.Search.map(movie => movie.imdbID);
        const moviesWithDetails = await Promise.all(movieIds.map(async id => {
          const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=7138b361&plot=full`);
          const data = await response.json();
          return data;
        }));
        setMovies(moviesWithDetails);
      };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          poster={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/250x250'}
        />
      ))}
    </div>
  );
}

export default MovieList;