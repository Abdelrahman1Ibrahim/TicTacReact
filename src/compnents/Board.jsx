function Board({ grid, handelClickButton }) {
  return (
    <div id="game-board">
      {grid.map((row, rowIndex) => {
        return (
          <ol key={rowIndex}>
            {row.map((cell, collIndex) => {
              return (
                <li key={collIndex}>
                  <button
                    onClick={() => handelClickButton(rowIndex, collIndex)}
                    disabled={cell !== ""}
                  >
                    {cell}
                  </button>
                </li>
              );
            })}
          </ol>
        );
      })}
    </div>
  );
}
export default Board;
