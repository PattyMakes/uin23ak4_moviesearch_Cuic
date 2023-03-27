function MovieCard({ movie, poster }) {
    return (
      <div className="movie-card">
        <img src={poster} alt={movie.Title} />
        <div className="movie-details">
          <h2>{movie.Title}</h2>
          <p><strong>Year: </strong>{movie.Year}</p>
          <p><strong>Type: </strong>{movie.Type}</p>
          <p><strong>IMDb ID: </strong>{movie.imdbID}</p>
          <p><strong>IMDB Rating: </strong>{movie.imdbRating}</p>
          <p><strong>Rated: </strong>{movie.Rated}</p>
          <p><strong>Runtime: </strong>{movie.Runtime}</p>
          <p><strong>Genre: </strong>{movie.Genre}</p>
          <p><strong>Director: </strong>{movie.Director}</p>
          <p><strong>Writer: </strong>{movie.Writer}</p>
          <p><strong>Actors: </strong>{movie.Actors}</p>
          {movie.Awards && <p><strong>Awards: </strong>{movie.Awards}</p>}
        </div>
      </div>
    );
  }
  
  export { MovieCard };