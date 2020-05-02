import React, { useState } from "react";
import { useSelector } from "react-redux";

export const SongDetail = () => {
  const [play, togglePlay] = useState(false);
  const selectedSong = useSelector((state) => state.selectedSong);
  if (!selectedSong) {
    return <div>Select a song</div>;
  }
  const audio = new Audio(selectedSong.source);

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.title}
        <br />
        Artist: {selectedSong.artist}
        <br />
        Duration: {selectedSong.duration}
      </p>
      <button
        onClick={() => {
          togglePlay(!play);
          audio.play();
        }}
      >
        {play ? "Don't Stop Clicking" : "Play song"}
      </button>
    </div>
  );
};
