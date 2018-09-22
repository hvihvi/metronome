import React from "react";
import { connect } from "react-redux";

const AppLayout = ({ tempo }) => <div>{tempo}</div>;

const mapStateToProps = state => {
  return {
    tempo: state.metronome.tempo
  };
};

export default connect(mapStateToProps)(AppLayout);
