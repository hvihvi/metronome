const initialState = {
  playing: false,
  splits: []
};

const TOOGLE_PLAYING = "TOOGLE_PLAYING";
export const tooglePlaying = () => {
  return {
    type: TOOGLE_PLAYING
  };
};

const ADD_SPLIT = "ADD_SPLIT";
export const addSplit = split => {
  return {
    type: ADD_SPLIT,
    split: split
  };
};

const metronome = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_PLAYING:
      return { ...state, playing: !state.playing };
    case ADD_SPLIT:
      return { ...state, splits: state.splits.concat(action.split) };
    default:
      return state;
  }
};

export default metronome;
