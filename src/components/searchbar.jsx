import React from "react";

class SearchBar extends React.Component {
  createSearch = event => {
    //we need this intermediate state to pass in the user input to the handleSearch function in our main app component
    event.preventDefault();
    const userInput = {
      input: this.userSearch.value
    };

    this.props.handleSearch(userInput);
    this.inputForm.reset();
  };

  render() {
    return (
      <form
        ref={input => (this.inputForm = input)}
        onSubmit={this.createSearch}
        className="search-form"
      >
        <input
          ref={input => (this.userSearch = input)}
          type="text"
          placeholder="search for music or videos"
        />
      </form>
    );
  }
}

export default SearchBar;
