const initialState = {
  playing: false,
  splits: [],
  splitId: 0,
  measure: 0
};

const PLAY = "PLAY";
export const play = () => {
  return {
    type: PLAY
  };
};

const PAUSE = "PAUSE";
export const pause = () => {
  return {
    type: PAUSE
  };
};

const STOP = "STOP";
export const stop = () => {
  return {
    type: STOP
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
    case PLAY:
      return { ...state, playing: true };
    case PAUSE:
      return { ...state, playing: false };
    case STOP:
      return {
        ...state,
        playing: false,
        splitId: initialState.splitId,
        measure: initialState.measure
      };
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
