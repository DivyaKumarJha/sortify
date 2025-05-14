import React from 'react';

function ArrayBar({ array, colorMap = {} }) {
  return (
    <div>
      <div className="flex items-end justify-center h-80 mb-8 bg-white p-5 rounded-lg shadow-md">
      {array.map((value, index) => (
        <div key={index} className="flex flex-col items-center mx-1">
          <div
            className="w-5 rounded-t"
            style={{
              height: `${value * 2}px`,
              backgroundColor: colorMap[index] || '#0891b2', // same as bg-cyan-600
              transition: 'height 0.3s ease, background-color 0.3s ease',
            }}
          />
          <span className="text-sm mt-1 text-gray-700">{value}</span>
        </div>
      ))}
    </div>
     <div className="absolute right-4 top-4 mt-48 bg-gray-100 p-3 rounded-lg shadow-inner text-sm w-36">
        <p className="mb-1 flex items-center">
          <span className="inline-block w-4 h-4 bg-orange-400 mr-2 rounded" /> Comparison
        </p>
        <p className="mb-1 flex items-center">
          <span className="inline-block w-4 h-4 bg-red-500 mr-2 rounded" /> Swapping
        </p>
        <p className="flex items-center">
          <span className="inline-block w-4 h-4 bg-green-500 mr-2 rounded" /> Sorted
        </p>
      </div>
    </div>
    
    
  );
}

export default ArrayBar;
