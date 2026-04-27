import { useState } from "react"; 
import "./App.css";
import EmojiButtons from "./components/Emojibutton";
import ColorButtons from "./components/colorbutton";
function Home() {
  const [emoji, setEmoji] = useState("😊");
  const [size, setSize] = useState(100);
  const [angle, setAngle] = useState(0);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="home-con">
      <div className="emoji-box" style={{ backgroundColor: color }}>
        <span style={{ fontSize: `${size}px`, transform: `rotate(${angle}deg)` }}>
          {emoji}
        </span>
      </div>

      <div className="controls-box">
        <h2>Customize Your Emoji</h2>
        <p>Use the buttons below to customize your emoji</p>


        <div className="control-section">
          <h3>Emoji Picker</h3>
          <div className="emoji-grid">
            <EmojiButtons emoji="🥰" setEmoji={setEmoji} />
            <EmojiButtons emoji="🤩" setEmoji={setEmoji} />
            <EmojiButtons emoji="😍 " setEmoji={setEmoji} />
            <EmojiButtons emoji="😊" setEmoji={setEmoji} />
          
          </div>
        </div>
        <div className="control-section">
          <h3>Color Picker</h3>
          <div className="color-grid">
            <ColorButtons color="#FF6666" setColor={setColor} />
            <ColorButtons color="#FFB266" setColor={setColor} />
            <ColorButtons color="#FFFF66" setColor={setColor} />
            <ColorButtons color="#66FF66" setColor={setColor} />
            <ColorButtons color="#66FFFF" setColor={setColor} />
           
          </div>
        </div>
        <div className="control-section">
          <h3>Size</h3>
          <input
            type="range"
            min="20"
            max="150"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="slider"
          />
        </div>
        <div className="control-section">
          <h3>Rotate Emoji</h3>
          <div className="rotate-btn" onClick={() => setAngle(angle + 45)}>
            Rotate
          </div>
        </div>
      </div>
    </div>
  );
}

export default App