import { useState } from "react";

function Player({ DefaultPlayerName, Symbol , active}) {
  const [isEdit, setisEdit] = useState(false);
  const [player, setPlayerName] = useState(DefaultPlayerName);

  function handelPlayerName(event) {
    setPlayerName(event.target.value);
  }

  function handelClickButton() {
    setisEdit((prev) => !prev);
  }
  return (
    <li className={`player ${active ? "active" : ""}`} >
      {isEdit == false ? (
        <span className="player-name">{player}</span>
      ) : (
        <input value={player} onChange={handelPlayerName} />
      )}
      <span className="player-symbol">{Symbol}</span>
      <button onClick={handelClickButton}>
        {isEdit == false ? "Edit" : "Save"}
      </button>
    </li>
  );
}
export default Player;
