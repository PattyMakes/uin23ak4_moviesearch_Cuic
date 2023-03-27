import '../css/SearchResults.css';
import { useState, useEffect } from 'react';
import { MovieCard } from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch('https://www.omdbapi.com/?s=james+bond&apikey=7138b361&type=movie');
      const data = await response.json();
      setMovies(data.Search);
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          poster={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x225'}
        />
      ))}
    </div>
  );
}

export default MovieList;