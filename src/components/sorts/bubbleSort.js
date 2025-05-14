export const bubbleSort = async (array, setArray, speed, setBarColors, sortingRef) => {
  let arr = [...array];
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let i = 0; i < arr.length - 1; i++) {
    if (!sortingRef.current) return; // Check if we should stop
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (!sortingRef.current) return; // Check if we should stop
      setBarColors({ [j]: 'orange', [j + 1]: 'orange' });
      await sleep(speed);

      if (arr[j] > arr[j + 1]) {
        if (!sortingRef.current) return; // Check if we should stop
        setBarColors({ [j]: 'red', [j + 1]: 'red' });
        await sleep(speed);

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await sleep(speed);
      }

      if (!sortingRef.current) return; // Check if we should stop
      setBarColors({});
    }
  }

  if (!sortingRef.current) return; // Check if we should stop
  let sortedColors = {};
  for (let k = 0; k < arr.length; k++) {
    sortedColors[k] = 'green';
  }
  setBarColors(sortedColors);
};
