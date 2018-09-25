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
      value: null
    };
  }

  componentDidMount = () => {
    var opts = {
      maxResults: 10,
      key: process.env.REACT_APP_API_KEY
    };

    Search(`${this.state.value}`, opts, (err, results) => {
      if (err) return console.log(err);
      let firstResult = results[0];

      this.setState({
        channelId: firstResult.channelId,
        description: firstResult.description,
        id: firstResult.id,
        link: firstResult.link,
        title: firstResult.title
      });
    });
  };

  handleSearch = event => {
    event.preventDefault();
    console.log(event.target.value);

    this.setState({
      value: event.target.value
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
