import React, { Component } from "react";
import { Media, Player, controls } from "react-media-player";
import {
  Volume,
  CurrentTime,
  Duration,
  Fullscreen,
  Progress,
  SeekBar
} from "react-media-player/lib/controls";
const { PlayPause, MuteUnmute } = controls;

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src={this.props.source} />
          </div>
          <div className="media-controls">
            <CurrentTime />
            <PlayPause />
            <MuteUnmute />
            <Volume />
            <Duration />
            <Fullscreen />
            <Progress />
            <SeekBar />
          </div>
        </div>
      </Media>
    );
  }
}

export default MediaPlayer;
