//Action Creator

export const selectSong = (song) => {
  return {
    //return a action

    type: "SONG_SELECTED",
    payload: song,
  };
};
