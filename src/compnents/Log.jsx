function Log({ log }) {
  return (
    <ol id="log">
      {log.map((value) => {
        return (
          <li key={`${value.rowIndex} ${value.collIndex}`}>
            {value.currentPlayer == "X" ? "O" : "X"} clicked {value.rowIndex},
            {value.collIndex}
          </li>
        );
      })}
    </ol>
  );
}

export default Log;
