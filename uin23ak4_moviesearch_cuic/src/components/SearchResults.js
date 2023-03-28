//KILDER: https://legacy.reactjs.org/docs/hooks-effect.html
//KILDER: https://stackoverflow.com/questions/62341026/movies-map-is-not-a-function

import { useState, useEffect } from 'react';
import { MovieCard } from './MovieCard';

function SearchResults({ searchQuery }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=7138b361&type=movie`);
        const data = await response.json();
        if (data.Search) {
          const movieIds = data.Search.slice(0, 10).map(movie => movie.imdbID);
          const moviesWithDetails = await Promise.all(movieIds.map(async id => {
            const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=7138b361&plot=full`);
            const data = await response.json();
            return data;
          }));
          setMovies(moviesWithDetails);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, [searchQuery]);

  return (
    <div>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            poster={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/250x250'}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;