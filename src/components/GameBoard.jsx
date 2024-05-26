export default function GameBoard({ onSelecteSquare, board }) {
  

  /* const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const upatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      upatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return upatedBoard;
    });

    onSelecteSquare()
  }*/


  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelecteSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
