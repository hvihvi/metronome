import React from "react";
import click1 from "../click1.wav";
import click2 from "../click2.wav";
import { connect } from "react-redux";
import { tooglePlaying } from "../redux/metronome";

class Player extends React.Component {
  state = {
    clickCount: 0,
    measureCount: 0,
    splitCount: 0
  };

  // Create Audio objects with the files Webpack loaded
  click1 = new Audio(click1);
  click2 = new Audio(click2);

  playClick = () => {
    const { clickCount, measureCount, splitCount } = this.state;
    const { splits } = this.props;

    // The first beat will have a different sound than the others
    if (clickCount % splits[splitCount].beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    // Keep track of which beat we're on
    const nextClickCount =
      (clickCount + 1) % splits[splitCount].beatsPerMeasure;
    const nextMeasureCount =
      (nextClickCount === 0 ? measureCount + 1 : measureCount) %
      splits[splitCount].measures;
    this.setState({
      ...this.state,
      clickCount: nextClickCount,
      measureCount: nextMeasureCount
    });
  };

  play = () => {
    const { playing, splits, tooglePlay } = this.props;
    if (splits.length === 0) {
      return;
    }
    if (playing) {
      // Stop the timer
      clearInterval(this.timer);
      tooglePlay();
      return;
    }
    // Start a timer with the current BPM
    this.timer = setInterval(this.playClick, (60 / splits[0].bpm) * 1000);
    this.setState(
      {
        clickCount: 0
        // Play a click "immediately" (after setState finishes)
      },
      this.playClick
    );
    tooglePlay();
  };

  render() {
    const { clickCount, measureCount, splitCount } = this.state;
    const { playing } = this.props;

    return (
      <div>
        {clickCount}/{measureCount}/{splitCount}
        <button onClick={this.play}>{playing ? "Stop" : "Start"}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playing: state.metronome.playing,
    splits: state.metronome.splits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tooglePlay: () => dispatch(tooglePlaying())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
