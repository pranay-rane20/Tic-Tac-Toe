import React from 'react';
import Board from './components/Board';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900">
      <h1 className="text-4xl font-bold text-yellow-400 mt-8 mb-6">
        ✨ TIC TAC TOE ✨
      </h1>
      <Board />
      
    </div>
  );
};

export default App;
