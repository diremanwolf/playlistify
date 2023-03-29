import './TrackList.component.css';

import React from 'react';
import Track from '../Track/Track.component';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        <Track name='Blanco White' artist='Nocturne' album='Nocturne EP' />
        <Track name='Borderline' artist='Tame Impala' album='The Slow Rush' />
        <Track name='Save Your Tears' artist='The Weekend' album='After Hours' />
      </div>
    );
  }
}

export default TrackList;

// Track.map: 9