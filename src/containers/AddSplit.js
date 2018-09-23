import React from "react";
import { connect } from "react-redux";
import { addSplit } from "../redux/metronome";

class AddSplits extends React.Component {
  state = {
    bpm: 120,
    beatsPerMeasure: 4,
    measures: 8
  };

  render() {
    const { addSplit } = this.props;
    const { bpm, beatsPerMeasure, measures } = this.state;
    return (
      <div>
        {bpm}
        <input
          type="range"
          min="60"
          max="240"
          value={bpm}
          onChange={event =>
            this.setState({ ...this.state, bpm: event.target.value })
          }
        />
        <input
          type="number"
          value={beatsPerMeasure}
          onChange={event =>
            this.setState({
              ...this.state,
              beatsPerMeasure: event.target.value
            })
          }
        />
        <input
          type="number"
          value={measures}
          onChange={event =>
            this.setState({
              ...this.state,
              measures: event.target.value
            })
          }
        />
        <button onClick={() => addSplit({ bpm, beatsPerMeasure, measures })}>
          +
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSplit: split => dispatch(addSplit(split))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddSplits);
