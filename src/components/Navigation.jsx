import React from 'react';

const Navigation = ({ handleNext, handlePrevious, canGoNext, canGoPrevious, isAnswered }) => (
  <div className="flex justify-between mt-6">
    <button
      onClick={handlePrevious}
      className="py-2 px-4 mt-10 text-black rounded-lg"
      disabled={!canGoPrevious}
    >
      &larr; Prev
    </button>
    <button
      onClick={handleNext}
      className={`py-2 px-4 mt-10 text-black rounded-lg ${!canGoNext || !isAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={!canGoNext || !isAnswered}
    >
      Next &rarr;
    </button>
  </div>
);

export default Navigation;
