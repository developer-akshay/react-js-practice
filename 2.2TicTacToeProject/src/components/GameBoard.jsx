import { useState } from "react";

const GameBoard = ({ onSelectSquare, board }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (row, col) => {
  //     setGameBoard((prev) => {
  //       const updateBoard = [...prev.map((innerArr) => [...innerArr])];
  //       updateBoard[row][col] = activePlayerSymbol;
  //       return updateBoard;
  //     });
  //     onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                  disabled={playerSymbol}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
