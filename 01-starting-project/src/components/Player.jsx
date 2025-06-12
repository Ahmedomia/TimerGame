import { useState, useRef } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const player_name = useRef();

  function handleClick() {
    setPlayerName(player_name.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={player_name}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
