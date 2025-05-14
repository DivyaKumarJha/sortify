export const insertionSort = async (array, setArray, speed, setBarColors, sortingRef) => {
  let arr = [...array];
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  for (let i = 1; i < arr.length; i++) {
    if (!sortingRef.current) return; // Check if we should stop
    let key = arr[i];
    let j = i - 1;

    setBarColors({ [i]: 'orange' });
    await sleep(speed);

    while (j >= 0 && arr[j] > key) {
      if (!sortingRef.current) return; // Check if we should stop
      setBarColors({ [j]: 'red', [j + 1]: 'red' });
      await sleep(speed);

      arr[j + 1] = arr[j];
      j = j - 1;

      setArray([...arr]);
      await sleep(speed);
    }
    if (!sortingRef.current) return; // Check if we should stop
    arr[j + 1] = key;
    setArray([...arr]);
    setBarColors({});
    await sleep(speed);
  }

  if (!sortingRef.current) return; // Check if we should stop
  let sortedColors = {};
  for (let k = 0; k < arr.length; k++) {
    sortedColors[k] = 'green';
  }
  setBarColors(sortedColors);
};
