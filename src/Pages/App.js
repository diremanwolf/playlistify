import './App.css';

import SearchBar from './Components/SearchBar/SearchBar.component';

function App() {
  return (
    <div>
      <h1><span className="highlight">Playlist</span>-ify</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
        </div>
      </div>
    </div>
  );
}

export default App;

// SearchBar: 8
// SearchResults: 10
// Playlist: 11