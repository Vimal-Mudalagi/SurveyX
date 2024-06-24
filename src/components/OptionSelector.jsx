import React, { useState, useEffect } from 'react';

const OptionSelector = ({ options, selectedOption, handleOptionClick }) => {
  const [tempSelectedOption, setTempSelectedOption] = useState(selectedOption);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTempSelectedOption(null);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedOption]);

  const handleSliderChange = (e) => {
    handleOptionClick(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <input
        type="range"
        min="0"
        max={options.length - 1}
        value={tempSelectedOption !== null ? tempSelectedOption : selectedOption !== null ? selectedOption : 0}
        onChange={handleSliderChange}
        className="w-full"
        style={{
          appearance: 'none',
          width: '100%',
          height: '5px',
          background: `linear-gradient(to right, #20adb4 0%, #20adb4 ${(selectedOption / (options.length - 1)) * 100}%, #cbd5e0 ${(selectedOption / (options.length - 1)) * 100}%, #cbd5e0 100%)`,
          outline: 'none',
          borderRadius: '4px'
        }}
        list="tickmarks"
      />
      <style>
        {`
          .slider::-webkit-slider-thumb {
            appearance: none;
            width: 16px;
            height: 16px;
            background-color: #20adb4;
            border-radius: 50%;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background-color: #20adb4;
            border: none;
            border-radius: 50%;
            cursor: pointer;
          }
          .slider::-ms-thumb {
            width: 16px;
            height: 16px;
            background-color: #20adb4;
            border: none;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>
      <div className="flex justify-between w-full mt-2 slider-points">
        {options.map((option, index) => (
          <div key={index} className={`slider-point ${tempSelectedOption === index ? 'selected' : ''}`}></div>
        ))}
      </div>
      <div className="flex justify-between w-full mt-2 font-bold text-xl">
        {options.map((option, index) => (
          <div key={index} className="text-sm">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
