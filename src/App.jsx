// App.js
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import ArrayBar from './components/ArrayBar';
import ButtonBar from './components/ButtonBar';
import RangeSlider from './components/RangeSlider';
import SortSelector from './components/sortSelector';
import { bubbleSort } from './components/sorts/bubbleSort';
import { mergeSort } from './components/sorts/mergeSort';
import { selectionSort } from './components/sorts/selectionSort';
import { insertionSort } from './components/sorts/insertionSort';


function App() {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(500);
  const [selectedSort, setSelectedSort] = useState('Bubble Sort'); 
  const [barColors, setBarColors] = useState({});
  const [isSorting, setIsSorting] = useState(false);
  const sortingRef = useRef(false);

  const generateArray = () => {
    sortingRef.current = false; // Signal any ongoing sort to stop
    setIsSorting(false);
    const newArr = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100) + 10
    );
    setArray(newArr);
    setBarColors({}); // Reset the colors when generating new array
  };

  const sortArray = async () => {
    if (isSorting) return; // Prevent starting a new sort if one is in progress
    setIsSorting(true);
    sortingRef.current = true;

    try {
      switch (selectedSort) {
        case 'Merge Sort':
          await mergeSort(array, setArray, speed, setBarColors, sortingRef);
          break;

        case 'Selection Sort':
          await selectionSort(array, setArray, speed, setBarColors, sortingRef);
          break;

        case 'Insertion Sort':
          await insertionSort(array, setArray, speed, setBarColors, sortingRef);
          break;

        default:
          await bubbleSort(array, setArray, speed, setBarColors, sortingRef);
          break;
      }
    } finally {
      setIsSorting(false);
      if (!sortingRef.current) {
        setBarColors({});
      }
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', background: '#f8f9fa' }}>
      <Header />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <ButtonBar onGenerate={generateArray} onSort={sortArray} />
        
        <SortSelector selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
        <ArrayBar array={array} colorMap={barColors} />
        
        <RangeSlider speed={speed} setSpeed={setSpeed} />
      </div>
    </div>
  );
}

export default App;
