import { useState } from "react";
import * as io from "socket.io-client";
import "./App.css";

const socket = io.connect("http://localhost:5000");

function App() {
  return (
    <div className='App'>
      <h3>Join a Chat</h3>
      <input type='text' placeholder='Hilary' />
      <input type='text' placeholder='Room' />
      <button>Join Room</button>
    </div>
  );
}

export default App;
