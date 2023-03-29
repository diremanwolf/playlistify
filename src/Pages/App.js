import './App.css';

import SearchBar from './Components/SearchBar/SearchBar.component';
import SearchResults from './Components/SearchResults/SearchResults.component';

function App() {
  return (
    <div>
      <h1><span className="highlight">Playlist</span>-ify</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
        </div>
      </div>
    </div>
  );
}

export default App;

// Playlist: 11