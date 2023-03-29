import './SearchBar.component.css';

import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(event) {
    this.setState({ query: event.target.value });
  }

  search() {
    this.props.onSearch(this.state.query);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar