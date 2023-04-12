import { useState } from "react";
import * as io from "socket.io-client";
import "./App.css";
import Chat from "./Chat";

const socket = io.connect("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className='App'>
      {!showChat ? (
        <div className='joinChatContainer'>
          <h3>Join a Chat</h3>
          <input
            type='text'
            placeholder='Username'
            onChange={(evt) => setUsername(evt.target.value)}
          />
          <input
            type='text'
            placeholder='Room'
            onChange={(evt) => setRoom(evt.target.value)}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
