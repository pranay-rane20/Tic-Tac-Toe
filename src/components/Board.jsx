import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const checkDraw = () => {
    return state.every(square => square !== null);
  };

  const winner = checkWinner();
  const isDraw = checkDraw();

  const handleClick = (index) => {
    if (state[index] || winner) return;
    const copyState = [...state];
    copyState[index] = isXTurn ? 'X' : 'O';
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 rounded-lg shadow-xl">
      <div className="grid grid-cols-3 gap-2">
        {state.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="mt-6 text-center">
        {winner ? (
          <div>
            <h2 className="text-2xl font-bold text-white">
              🎉 Player {winner} Wins!
            </h2>
            <button
              onClick={resetGame}
              className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 transition duration-300"
            >
              Play Again
            </button>
          </div>
        ) : isDraw ? (
          <div>
            <h2 className="text-2xl font-bold text-white">
              🤝 It&apos;s a Draw!
            </h2>
            <button
              onClick={resetGame}
              className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 transition duration-300"
            >
              Play Again
            </button>
          </div>
        ) : (
          <h3 className="text-xl font-semibold text-white">
            Player {isXTurn ? 'X' : 'O'}&apos;s Turn
          </h3>
        )}
      </div>
    </div>
  );
};

export default Board;
