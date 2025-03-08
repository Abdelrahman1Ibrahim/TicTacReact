import Player from "./Player";

function Players({ currentPlayer }) {
  return (
    <ol id="players" className={`highlight-player ${currentPlayer}`}>
      <Player
        DefaultPlayerName="Player 1"
        Symbol="X"
        active={currentPlayer === "X"}
        
      />
      <Player
        DefaultPlayerName="Player 2"
        Symbol="O"
        active={currentPlayer === "O"}
      />
    </ol>
  );
}

export default Players;
