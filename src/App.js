import React, { Component } from "react";
import SearchBar from "./components/searchbar.jsx";
import "./App.css";
import MediaPlayer from "./components/mediaplayer";
import Search from "youtube-search";

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

  handleSearch = userInput => {
    //userInput from createSearch in searchbar component
    var opts = { maxResults: 10, key: process.env.REACT_APP_API_KEY };
    console.log(userInput.input);

    //Youtube Search custom API (search input, options, (callback function with results))
    Search(`${userInput.input}`, opts, (err, results) => {
      if (err) return console.log(err);

      let firstResult = results[0];
      console.log(results);
      console.log(results[0].id);
      console.log(results[0].link);
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
        <SearchBar handleSearch={this.handleSearch} />
        <div className="media">
          <MediaPlayer source={this.state.link} />
        </div>
      </div>
    );
  }
}

export default App;
