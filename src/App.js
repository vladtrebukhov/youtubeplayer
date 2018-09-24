import React, { Component } from "react";
import SearchBar from "./components/searchbar.jsx";
import "./App.css";
import MediaPlayer from "./components/mediaplayer";
import Search from "youtube-search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: null
    };
  }

  componentDidMount() {
    var opts = {
      maxResults: 20,
      key: process.env.REACT_APP_API_KEY
    };

    Search("jsconf", opts, function(err, results) {
      if (err) return console.log(err);

      let randomVideo = results[Math.floor(Math.random() * results.length)];
    });

    // this.setState({
    //   videoURL: this.randomVideo
    // });
  }

  handleSearch = event => {
    event.preventDefault();
    let value = event.target.value;
    console.log(value);
  };

  render() {
    return (
      <div className="main-container">
        <SearchBar handleSearch={this.handleSearch} />
        <div className="media">
          <MediaPlayer />
        </div>
      </div>
    );
  }
}

export default App;
