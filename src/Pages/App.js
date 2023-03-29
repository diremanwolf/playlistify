import './App.css';

import React from 'react';

import Playlist from '../Components/Playlist/Playlist.component';
import SearchBar from '../Components/SearchBar/SearchBar.component';
import SearchResults from '../Components/SearchResults/SearchResults.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { id: 1, name: 'qwe', album: 'iop', artist: 'titi', isRemoval: false },
        { id: 2, name: 'asd', album: 'jkl', artist: 'toto', isRemoval: true },
        { id: 3, name: 'zxc', album: 'bnm', artist: 'tata', isRemoval: false }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Playlist</span>-ify</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults results={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
