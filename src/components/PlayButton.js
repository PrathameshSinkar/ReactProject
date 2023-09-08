import React, { useState } from "react";
import "./PlayButton.css";

function PlayButton({ onClickPlay, children, style, onClickPause }) {
  const [playingStatus, setplayingStatus] = useState(false);

  function handleClick(p) {
    p.stopPropagation();
    setplayingStatus(!playingStatus);

    playingStatus ?onClickPause():onClickPlay();
  }

  return (
    <div>
      <button style={style} onClick={handleClick}>
        {children}
        {playingStatus ? "⏸️" : "▶️"}
      </button>
    </div>
  );
}

export default PlayButton;
