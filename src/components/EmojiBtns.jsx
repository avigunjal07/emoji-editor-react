import React from "react";
import "./EmojiBtns.css";

function EmojiBtns({ emoji, setEmoji }) {
  return (
    <button className="emoji-btn" onClick={() => setEmoji(emoji)}>
      {emoji}
    </button>
  );
}

export default EmojiBtns;