import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSearch} className="search-form">
        <input type="text" placeholder="search for music or videos" />
      </form>
    );
  }
}

export default SearchBar;
