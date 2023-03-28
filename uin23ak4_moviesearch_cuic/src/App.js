//KILDER: https://www.freecodecamp.org/news/react-movie-app-tutorial/

import './css/main.css';
import SearchResults from './components/SearchResults';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('james+bond');

  const handleSearch = query => {
    setSearchQuery(query || 'james+bond');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search</h1>
      </header>
      <main>
        <div>
          <input
            type="text"
            name="query"
            placeholder="Search for movies..."
            onChange={e => handleSearch(e.target.value)}
          />
          <button onClick={() => handleSearch(searchQuery)}>Search</button>
        </div>
        <SearchResults searchQuery={searchQuery} />
      </main>
    </div>
  );
}

export default App;