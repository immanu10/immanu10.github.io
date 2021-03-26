import React from "react";
import Typewriter from "typewriter-effect";
import "./Name.css";

const Name = () => {
  return (
    <div>
      <h1 className="hi-there-text">Hi there! I'm Manoj 👋</h1>
      <div className="animation-text">
        <p>I like</p>
        <Typewriter
          options={{
            strings: [
              "Web Development 💻",
              "Frontend & UI/UX 🎨",
              "Football ⚽",
              "Technology 📱",
              "Cricket 🏏",
            ],
            autoStart: true,
            loop: true,
            cursor: "",
            pausFor: 2000,
          }}
        />
      </div>
    </div>
  );
};
export default Name;
