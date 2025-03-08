import Players from "./Players";
import Board from "./Board";
import Log from "./Log";
import GameOver from "./GameOver";
import { WINNING_COMBINATIONS } from "../../public/winning";

import { useState } from "react";

let initialGrid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let currentPlayer = "X";

function checkWinning(initialGrid) {
  for (const stateWinning of WINNING_COMBINATIONS) {
    const [cell1, cell2, cell3] = stateWinning;
    const value1 = initialGrid[cell1.row][cell1.column];
    const value2 = initialGrid[cell2.row][cell2.column];
    const value3 = initialGrid[cell3.row][cell3.column];
    if (value1 && value1 === value2 && value1 === value3) {
      return true;
    }
  }
  return false;
}

function Game() {
  const [log, setLog] = useState([]);
  // const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleLog(rowIndex, collIndex) {
    initialGrid[rowIndex][collIndex] = currentPlayer === "X" ? "O" : "X";
    setLog((prev) => {
      return [
        {
          currentPlayer: currentPlayer,
          rowIndex: rowIndex,
          collIndex: collIndex
        },
        ...prev
      ];
    });
  }

  function handleClickButton(rowIndex, collIndex) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    handleLog(rowIndex, collIndex);
    // setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function handelRestGame() {
    initialGrid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    // console.log(initialGrid);
    currentPlayer = "X";
    setLog([]);
  }

  // const isDraw = initialGrid.every((row) => row.every((cell) => cell !== ""));
  // const hasWinner = checkWinning(initialGrid);

  return (
    <>
      <div id="game-container">
        <Players currentPlayer={currentPlayer} />
        <Board grid={initialGrid} handelClickButton={handleClickButton} />
        {checkWinning(initialGrid) ||
        initialGrid.every((row) => row.every((cell) => cell !== "")) ? (
          <GameOver
            winner={
              checkWinning(initialGrid)
                ? currentPlayer === "X"
                  ? "O"
                  : "X"
                : "Draw"
            }
            handelRestGame={handelRestGame}
          />
        ) : null}
      </div>
      <Log log={log} />
    </>
  );
}
export default Game;
