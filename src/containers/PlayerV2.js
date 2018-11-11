import React, { useState } from "react";
import click1 from "../click1.wav";
import click2 from "../click2.wav";

// Create Audio objects with the files Webpack loaded
const tic = new Audio(click1);
const tac = new Audio(click2);

const playTic = (clickCount, currentSplit) =>
  clickCount % currentSplit.beatsPerMeasure === 0 ? tac.play() : tic.play();

const PlayerV2 = () => {
  const [clickCount, setClickCount] = useState(0);
  const [playing, setPlaying] = useState(false);

  const play = () => setInterval(tic.play(), 1000);

  return (
    <div>
      <div>{clickCount}</div>
      <button onClick={play}>{playing ? "Pause" : "Start"}</button>
    </div>
  );
};

export default PlayerV2;
