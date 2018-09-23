import React from "react";

class SearchBar extends React.Component {
  handleSearch = event => {
    let value = event.target.value;
    console.log(value);
  };

  render() {
    return (
      <form onChange={this.props.handleSearch} className="search-form">
        <input type="text" placeholder="search for music or videos" />
      </form>
    );
  }
}

export default SearchBar;
