import './SearchResults.component.css';

import React from 'react';
import TrackList from '../TrackList/TrackList.component';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.results} />
      </div>
    );
  }
}

export default SearchResults;
