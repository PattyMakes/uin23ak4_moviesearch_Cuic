//KILDER: https://www.youtube.com/watch?v=VUXyJZWRad0&ab_channel=CodeWithTony

function MovieCard({ movie, poster }) {
    return (
      <div className="movie-card">
        <img src={poster} alt={movie.Title} />
        <div className="movie-details">
          <h2>{movie.Title}</h2>
          <li><strong>Year: </strong>{movie.Year}</li>
          <li><strong>Type: </strong>{movie.Type}</li>
          <li><strong>IMDb ID: </strong>{movie.imdbID}</li>
          <li><strong>IMDB Rating: </strong>{movie.imdbRating}</li>
          <li><strong>Rated: </strong>{movie.Rated}</li>
          <li><strong>Runtime: </strong>{movie.Runtime}</li>
          <li><strong>Genre: </strong>{movie.Genre}</li>
          <li><strong>Director: </strong>{movie.Director}</li>
          <li><strong>Writer: </strong>{movie.Writer}</li>
          <li><strong>Actors: </strong>{movie.Actors}</li>
          {movie.Awards && <li><strong>Awards: </strong>{movie.Awards}</li>}
        </div>
      </div>
    );
  }
  
  export { MovieCard };