import { combineReducers } from "redux";
const SongsReducers = () => {
  return [
    { title: "No Scrubs", duration: "5:00" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Start", duration: "4:30" },
    { title: "Hello", duration: "7:30" },
  ];
};

const SelectedSongReducers = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  song: SongsReducers,
  selectedSong: SelectedSongReducers,
});
