import React, { Component } from "react";
import "./searchresults.css";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    event.preventDefault();
    let clickedLink = event.target.href;

    this.props.handleLinkClick(clickedLink);
  };

  render() {
    if (this.props.results !== null) {
      return (
        <div className="results">
          {this.props.results.map(video => {
            return (
              <a className="links" onClick={this.handleClick} href={video.link}>
                {video.title}
              </a>
            );
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
export default SearchResults;
