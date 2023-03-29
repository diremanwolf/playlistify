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
        { id: 1, name: 'qwe', album: 'iop', artist: 'titi' },
        { id: 2, name: 'asd', album: 'jkl', artist: 'toto' },
        { id: 3, name: 'zxc', album: 'bnm', artist: 'tata' }
      ],
      playlistTracks: [
        { id: 1, name: 'qwe', album: 'iop', artist: 'titi' },
        { id: 2, name: 'asd', album: 'jkl', artist: 'toto' },
        { id: 3, name: 'zxc', album: 'bnm', artist: 'tata' }
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks.push(track);

    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Playlist</span>-ify</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
