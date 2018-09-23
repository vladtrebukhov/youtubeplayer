import React, { Component } from "react";
import SearchBar from "./components/searchbar.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch = event => {
    let value = event.target.value;
    console.log(value);
  };

  render() {
    return (
      <div className="main-player">
        <SearchBar handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
