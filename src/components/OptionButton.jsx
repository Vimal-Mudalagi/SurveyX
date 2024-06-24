import React from 'react';

const OptionButton = ({ option, index, handleClick, selected }) => (
  <button
    onClick={() => handleClick(index)}
    className={`w-full py-2 px-4 border rounded-lg text-center ${
      selected === index ? 'bg-blue-500 text-white' : 'bg-gray-100'
    }`}
  >
    {option}
  </button>
);

export default OptionButton;
