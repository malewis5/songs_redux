import React from "react";
import { selectSong } from "../actions";
import { useDispatch } from "react-redux";

export const Song = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="item" key={props.title}>
      <div className="right floated content">
        <button
          className="ui button primary"
          onClick={() => dispatch(selectSong(props))}
        >
          SELECT
        </button>
      </div>
      <div className="content">{props.title}</div>
    </div>
  );
};
