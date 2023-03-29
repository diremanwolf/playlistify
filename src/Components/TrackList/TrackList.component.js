import './TrackList.component.css';

import React from 'react';
import Track from '../Track/Track.component';

class TrackList extends React.Component {
  render() {
    if(!this.props.tracks) {
      return null;
    }

    return (
      <div className="TrackList">
        {
          this.props.tracks.map((track, index) => {
            return <Track id={track.id} key={index} name={track.name} album={track.album} artist={track.artist} isRemoval={track.isRemoval}/>
          })
        }
      </div>
    );
  }
}

export default TrackList;

// Track.map: 9