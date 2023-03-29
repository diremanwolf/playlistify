import './Track.component.css';

import React from 'react';

class Track extends React.Component {
  renderAction() {
    return (this.props.remove) ? <p className='Track-action'>-</p> : <p className='Track-action'>+</p>;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist} | {this.props.album}</p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
      </div>
    );
  }
}

export default Track;
