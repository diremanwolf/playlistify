import './Playlist.component.css';

import React from 'react';
import TrackList from '../TrackList/TrackList.component';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.name} />
        <TrackList tracks={this.props.tracks} isRemoval={true} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
