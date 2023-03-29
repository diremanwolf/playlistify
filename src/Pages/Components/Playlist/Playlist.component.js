import React from 'react';

import './Playlist.component.css';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={ 'New Playlist' } />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;

// TrackList: 10