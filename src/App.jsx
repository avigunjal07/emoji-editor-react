import { useState } from "react";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("😍");
  const [bgColor, setBgColor] = useState("#5fd3d0");
  const [size, setSize] = useState(100);
  const [rotate, setRotate] = useState(0);

  const emojis = ["🥰", "😎", "😍", "😉"];
  const colors = ["#ff6b6b", "#f7a440", "#f7e733", "#4cd964", "#5fd3d0"];

  return (
    <div className="container">
      <div className="preview" style={{ backgroundColor: bgColor }}>
        <div
          className="emoji"
          style={{
            fontSize: `${size}px`,
            transform: `rotate(${rotate}deg)`
          }}
        >
          {emoji}
        </div>
      </div>

      <div className="controls">
        <h2>Customize Your Emoji</h2>

        <p>Emoji Picker</p>
        <div className="row">
          {emojis.map((e, i) => (
            <button key={i} onClick={() => setEmoji(e)}>
              {e}
            </button>
          ))}
        </div>

        <p>Color Picker</p>
        <div className="row">
          {colors.map((c, i) => (
            <span
              key={i}
              className="color"
              style={{ backgroundColor: c }}
              onClick={() => setBgColor(c)}
            ></span>
          ))}
        </div>

        <p>Size</p>
        <input
          type="range"
          min="50"
          max="200"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        <p>Rotate Emoji</p>
        <button id='rotate-btn' onClick={() => setRotate(rotate + 45)}>Rotate</button>
      </div>
    </div>
  );
}

export default App;