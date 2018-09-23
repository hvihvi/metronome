import React from "react";

export const Split = ({ split }) => (
  <div>
    bpm: {split.bpm}
    beatsPerMeasure: {split.beatsPerMeasure}
    measures: {split.measures}
  </div>
);
