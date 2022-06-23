import { createStore, action } from "easy-peasy";

export const store = createStore({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: action((state: { activeSongs: [] }, payload) => {
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state: { activeSong: any }, payload) => {
    state.activeSong = payload;
  }),
});
