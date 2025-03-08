function GameOver({ winner , handelRestGame }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner === "Draw" ? "It's a draw!" : `${winner} wins!`}</p>
      <button onClick={handelRestGame}>Rematch</button>
    </div>
  );
}

export default GameOver;
