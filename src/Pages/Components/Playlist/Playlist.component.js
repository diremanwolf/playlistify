import React from 'react';
import TrackList from '../TrackList/TrackList.component';

import './Playlist.component.css';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={ 'New Playlist' } />
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
