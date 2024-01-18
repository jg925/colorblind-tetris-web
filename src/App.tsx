// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./css/index.css";

// This will power the base layer of the website

function App() {
  return (
    <>
      <div className="title">
        <h1>TETRIS</h1>
        <h2>but with fun colors!</h2>
      </div>

      {/* Settings */}
      <div className="settings"></div>
      {/* Tetris board */}
      <div className="tetris-board"></div>
    </>
  );
}

export default App;
