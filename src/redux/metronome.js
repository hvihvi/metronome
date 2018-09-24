const initialState = {
  playing: false,
  splits: [],
  splitId: 0,
  measure: 0
};

const TOOGLE_PLAYING = "TOOGLE_PLAYING";
export const tooglePlaying = () => {
  return {
    type: TOOGLE_PLAYING
  };
};

const NEXT_SPLIT = "NEXT_SPLIT";
export const nextSplit = () => {
  return {
    type: NEXT_SPLIT
  };
};

const NEXT_MEASURE = "NEXT_MEASURE";
export const nextMeasure = () => {
  return {
    type: NEXT_MEASURE
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
    case NEXT_MEASURE:
      return { ...state, measure: state.measure + 1 };
    case NEXT_SPLIT:
      return { ...state, measure: 0, splitId: state.splitId + 1 };
    default:
      return state;
  }
};

export default metronome;
