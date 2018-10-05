import React, { Component } from "react";
import SearchBar from "./components/searchbar.jsx";
import "./App.css";
import MediaPlayer from "./components/mediaplayer";
import Search from "youtube-search";
import SearchResults from "./components/searchresults.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelId: null,
      description: null,
      id: null,
      link: null,
      title: null,
      value: null,
      allResults: null
    };
  }

  handleLinkClick = link => {
    this.setState({
      link: link
    });
  };

  handleSearch = userInput => {
    //userInput from createSearch in searchbar component
    var opts = { maxResults: 10, key: process.env.REACT_APP_API_KEY };

    //Youtube Search custom API (search input, options, (callback function with results))
    Search(`${userInput.input}`, opts, (err, results) => {
      if (err) return console.log(err);

      let firstResult = results[0];
      console.log(results);

      this.setState({
        channelId: firstResult.channelId,
        description: firstResult.description,
        id: firstResult.id,
        link: firstResult.link,
        title: firstResult.title,
        allResults: results
      });
    });
  };

  render() {
    return (
      <div className="main-container">
        <div className="search">
          <SearchBar handleSearch={this.handleSearch} />
        </div>
        <div className="media">
          <MediaPlayer source={this.state.link} />
        </div>
        <div className="results">
          <SearchResults
            key={this.state.id}
            handleLinkClick={this.handleLinkClick}
            results={this.state.allResults}
          />
        </div>
      </div>
    );
  }
}

export default App;
