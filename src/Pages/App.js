import './App.css';

import Playlist from './Components/Playlist/Playlist.component';
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
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
