import './Playlist.component.css';

import React from 'react';

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
