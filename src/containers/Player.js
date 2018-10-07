import React from "react";
import click1 from "../click1.wav";
import click2 from "../click2.wav";
import { connect } from "react-redux";
import { nextMeasure, nextSplit, pause, play, stop } from "../redux/metronome";

class Player extends React.Component {
  state = {
    clickCount: 0
  };

  // Create Audio objects with the files Webpack loaded
  click1 = new Audio(click1);
  click2 = new Audio(click2);

  playClick = () => {
    const { clickCount } = this.state;
    const { splits, splitId, measure } = this.props;
    const currentSplit = splits[splitId];

    // The first beat will have a different sound than the others
    if (clickCount % currentSplit.beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    if (clickCount + 1 === currentSplit.beatsPerMeasure) {
      this.props.nextMeasure();

      if (measure + 1 === currentSplit.measures) {
        this.props.nextSplit();
      }
    }

    // Keep track of which beat we're on
    this.setState({
      ...this.state,
      clickCount: (clickCount + 1) % currentSplit.beatsPerMeasure
    });
  };

  onPlay = () => {
    const { playing, splits, splitId, play, pause } = this.props;
    if (splits.length === 0) {
      return;
    }
    if (playing) {
      // Stop the timer
      clearInterval(this.timer);
      pause();
      return;
    }
    // Start a timer with the current BPM
    this.timer = setInterval(this.playClick, (60 / splits[splitId].bpm) * 1000);
    this.setState(
      {
        clickCount: 0
        // Play a click "immediately" (after setState finishes)
      },
      this.playClick
    );
    play();
  };

  render() {
    const { clickCount } = this.state;
    const { splitId, playing, measure, stop } = this.props;

    return (
      <div>
        {clickCount}/{measure}/{splitId}
        <button onClick={this.onPlay}>{playing ? "Pause" : "Start"}</button>
        <button onClick={stop}>{"Stop"}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playing: state.metronome.playing,
    splits: state.metronome.splits,
    splitId: state.metronome.splitId,
    measure: state.metronome.measure
  };
};

const mapDispatchToProps = dispatch => {
  return {
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    stop: () => dispatch(stop()),
    nextSplit: () => dispatch(nextSplit()),
    nextMeasure: () => dispatch(nextMeasure())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
