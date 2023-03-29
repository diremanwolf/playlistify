import './TrackList.component.css';

import React from 'react';
import Track from '../Track/Track.component';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map((track, index) => {
            return <Track
              key={index}
              track={track}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval} />
          })
        }
      </div>
    );
  }
}

export default TrackList;
