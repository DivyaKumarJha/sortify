// components/sortSelector.jsx
import React, { useState } from 'react';

function SortSelector({ selectedSort, setSelectedSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const sortOptions = ['Merge Sort', 'Selection Sort', 'Bubble Sort', 'Insertion Sort'];

  const handleSelect = (option) => {
    setSelectedSort(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block mb-5 w-52 z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}// so that button gets closed afterre selecting the type of sort
        // console.log(isOpen)
        className="w-full px-5 py-2 bg-purple-700 text-white rounded cursor-pointer"
      >
        {selectedSort} ▼
      </button>

      {isOpen && (
        <div className="absolute w-full top-full mt-1 left-0 bg-white shadow-md rounded z-50">
          {sortOptions.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              // console.log(option)
              className="px-5 py-2 cursor-pointer border-b last:border-b-0 hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortSelector;
