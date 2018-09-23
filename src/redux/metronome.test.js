import { addSplit } from "./metronome";
import metronome from "./metronome";

it("ADD_SPLIT should add split to empty splits", () => {
  //given
  const state = { splits: [] };
  const action = addSplit({ bpm: 120 });
  //when
  const nextState = metronome(state, action);
  //then
  expect(nextState).toEqual({ splits: [{ bpm: 120 }] });
});

it("ADD_SPLIT should add split to array of splits", () => {
  //given
  const state = { splits: [{ bpm: 60 }, { bpm: 180 }] };
  const action = addSplit({ bpm: 120 });
  //when
  const nextState = metronome(state, action);
  //then
  expect(nextState).toEqual({
    splits: [{ bpm: 60 }, { bpm: 180 }, { bpm: 120 }]
  });
});
