import React from "react";
import Player from "./Player";
import { updateBpm } from "../redux/metronome";
import Splits from "./Splits";

const AppLayout = () => (
  <div>
    <Splits />
    <Player beatsPerMeasure={4} />
  </div>
);

export default AppLayout;
