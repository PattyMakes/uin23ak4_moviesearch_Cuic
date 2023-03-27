import { useState } from 'react';
import './css/SearchResults.css';
import SearchResults from './components/SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchMovies = async () => {
    if (searchQuery.length < 3) {
      return;
    }
  
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=7138b361&s=${searchQuery}&type=movie&plot=full`);
      const data = await response.json();
      setMovies(data.Search.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search</h1>
        <div className="search-container">
          <input type="text" placeholder="Search for a movie" value={searchQuery} onChange={handleSearchChange} />
          <button onClick={searchMovies}>Search</button>
        </div>
      </header>
      <main>
        {movies && <SearchResults movies={movies} />}
      </main>
    </div>
  );
}

export default App;