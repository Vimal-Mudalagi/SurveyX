import React from 'react';

const Question = ({ question, current, total }) => (
  <div className="text-center mb-4">
    <h2 className="text-lg font-semibold text-[#20adb4] mb-10">{question}</h2>
    <p className="font-bold text-xl text-red-400 mb-8">{current}/{total}</p>
  </div>
);

export default Question;
