const initialState = {
  bpm: 120,
  playing: false
};

const UPDATE_BPM = "UPDATE_BPM";
export const updateBpm = value => {
  return {
    type: UPDATE_BPM,
    bpm: value
  };
};

const TOOGLE_PLAYING = "TOOGLE_PLAYING";
export const tooglePlaying = () => {
  return {
    type: TOOGLE_PLAYING
  };
};

const metronome = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BPM:
      return { ...state, bpm: action.bpm };
    case TOOGLE_PLAYING:
      return { ...state, playing: !state.playing };
    default:
      return state;
  }
};

export default metronome;
