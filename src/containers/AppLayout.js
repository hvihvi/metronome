import React from "react";
import { connect } from "react-redux";
import Player from "./Player";
import { updateBpm } from "../redux/metronome";

const AppLayout = ({ bpm, updateBpm }) => (
  <div>
    {bpm}
    <div className="bpm-slider">
      <div>{bpm} BPM</div>
      <input
        type="range"
        min="60"
        max="240"
        value={bpm}
        onChange={event => updateBpm(event.target.value)}
      />
    </div>
    <Player beatsPerMeasure={4} />
  </div>
);

const mapStateToProps = state => {
  return {
    bpm: state.metronome.bpm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBpm: value => dispatch(updateBpm(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
