import React from "react";
import { Split } from "../components/Split";
import { connect } from "react-redux";
import AddSplits from "./AddSplit";

const Splits = ({ splits }) => (
  <div>
    {splits.map((split, idx) => (
      <Split key={idx} split={split} />
    ))}
    <AddSplits />
  </div>
);

const mapStateToProps = state => {
  return {
    splits: state.metronome.splits
  };
};

export default connect(mapStateToProps)(Splits);
