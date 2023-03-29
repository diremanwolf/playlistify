import './App.css';

import React from 'react';
// import Spotify from '../Util/Spotify';

import Playlist from '../Components/Playlist/Playlist.component';
import SearchBar from '../Components/SearchBar/SearchBar.component';
import SearchResults from '../Components/SearchResults/SearchResults.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistName: 'New Playlist',
      searchResults: [
        { name: 'qwe', album: 'iop', artist: 'titi' },
        { name: 'asd', album: 'jkl', artist: 'toto' },
        { name: 'zxc', album: 'bnm', artist: 'tata' }
      ],
      playlistTracks: [
        { name: 'qwe', album: 'iop', artist: 'titi' },
        { name: 'asd', album: 'jkl', artist: 'toto' },
        { name: 'zxc', album: 'bnm', artist: 'tata' }
      ]
    }

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {console.log('addTrack at APp', track)
    let tracks = this.state.playlistTracks;
    tracks.push(track);

    this.setState({playlistTracks: tracks});
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Playlist</span>-ify</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
