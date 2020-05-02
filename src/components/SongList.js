import React from "react";
import { useSelector } from "react-redux";
import { Song } from "./Song";

export const SongList = () => {
  const songList = useSelector((state) => state.songs);

  return (
    <div className="ui divided list">
      {songList.map((song) => (
        <Song
          key={song.title}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
        />
      ))}
    </div>
  );
};
