import React from 'react';

const Square = ({ onClick, value }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center w-24 h-24 border border-gray-400 text-4xl font-bold bg-white hover:bg-gray-200 cursor-pointer transition-all duration-300 shadow-md"
    >
      {value}
    </div>
  );
};

export default Square;
