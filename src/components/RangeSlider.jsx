// components/RangeSlider.js
import React from 'react';

function RangeSlider({ speed, setSpeed }) {
  return (
    <div className="text-center mb-8">
      <label className="font-semibold text-lg text-gray-800">
        Animation Speed: {speed}ms
      </label>
      <br />
      <input
        type="range"
        min="10"
        max="1000"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        className="w-3/5 mt-3 appearance-none h-2 bg-gray-300 rounded-full outline-none accent-purple-700"/>
    </div>
  );
}



export default RangeSlider;
