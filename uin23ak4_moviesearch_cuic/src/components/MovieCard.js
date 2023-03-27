function MovieCard({ movie, poster }) {
    return (
      <div className="movie-card">
        <img src={poster} alt={movie.Title} />
        <div className="movie-details">
          <h2>{movie.Title}</h2>
          <p><strong>Year: </strong>{movie.Year}</p>
          <p><strong>Type: </strong>{movie.Type}</p>
          <p><strong>imdb ID: </strong>{movie.imdbID}</p>
          <p><strong>imdb Rating: </strong>{movie.imdbRating}</p>
          <p><strong>Rated: </strong>{movie.Rated}</p>
          <p><strong>Runtime: </strong>{movie.Runtime}</p>
          <p><strong>Genre: </strong>{movie.Genre}</p>
          <p><strong>Director: </strong>{movie.Director}</p>
          <p><strong>Writer: </strong>{movie.Writer}</p>
          <p><strong>Actors: </strong>{movie.Actors}</p>
          <p><strong>Plot: </strong>{movie.Plot}</p>
        </div>
      </div>
    );
  }

  export { MovieCard };