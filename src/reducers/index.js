import { combineReducers } from "redux";

const songsReducer = () => {
  const songs = [
    { title: "PPAP", duration: "2:33", artist: "PIKOTARO" },
    {
      title: "Lowlands Away",
      duration: "2:58",
      artist: "Chad Jasso",
      source:
        "https://vgmdownloads.com/soundtracks/assassin-s-creed-iv-black-flag-sea-shanty-edtion/opgzponf/17.%20Lowlands%20Away.mp3",
    },
    { title: "All Star", duration: "3:56", artist: "Smash Mouth" },
  ];

  return songs;
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
