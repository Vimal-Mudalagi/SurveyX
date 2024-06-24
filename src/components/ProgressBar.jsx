import React from 'react';

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-300 h-4 mb-12 rounded-lg">
    <div className="bg-[#20adb4] h-4 rounded-lg" style={{ width: `${progress}%` }}></div>
  </div>
);

export default ProgressBar;
