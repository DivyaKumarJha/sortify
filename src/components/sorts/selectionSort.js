export const selectionSort = async (array, setArray, speed, setBarColors, sortingRef) => {
  let arr = [...array];
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  for (let i = 0; i < arr.length; i++) {
    if (!sortingRef.current) return; // Check if we should stop
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (!sortingRef.current) return; // Check if we should stop
      setBarColors({ [minIdx]: 'orange', [j]: 'orange' });
      await sleep(speed);

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
      setBarColors({});
    }

    if (minIdx !== i) {
      if (!sortingRef.current) return; // Check if we should stop
      setBarColors({ [i]: 'red', [minIdx]: 'red' });
      await sleep(speed);

      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
      await sleep(speed);
    }
    if (!sortingRef.current) return; // Check if we should stop
    setBarColors({});
  }

  if (!sortingRef.current) return; // Check if we should stop
  let sortedColors = {};
  for (let k = 0; k < arr.length; k++) {
    sortedColors[k] = 'green';
  }
  setBarColors(sortedColors);
};
