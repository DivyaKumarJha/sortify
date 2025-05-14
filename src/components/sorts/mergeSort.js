export const mergeSort = async (array, setArray, speed, setBarColors, sortingRef) => {
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  async function merge(arr, l, m, r) {
    if (!sortingRef.current) return; // Check if we should stop
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = arr.slice(l, m + 1);
    let R = arr.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
      if (!sortingRef.current) return; // Check if we should stop
      setBarColors({ [k]: 'orange', [k + 1]: 'orange' });  // Compare in orange
      await sleep(speed);

      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      setArray([...arr]);
      setBarColors({ [k]: 'red', [k + 1]: 'red' });  // Swap/merge in red
      await sleep(speed);
      k++;
    }

    while (i < n1) {
      if (!sortingRef.current) return; // Check if we should stop
      arr[k] = L[i];
      i++;
      k++;
      setArray([...arr]);
      setBarColors({ [k-1]: 'red' });  // Highlight merge in red
      await sleep(speed);
    }

    while (j < n2) {
      if (!sortingRef.current) return; // Check if we should stop
      arr[k] = R[j];
      j++;
      k++;
      setArray([...arr]);
      setBarColors({ [k-1]: 'red' });  // Highlight merge in red
      await sleep(speed);
    }
    if (!sortingRef.current) return; // Check if we should stop
    setBarColors({});  // Reset colors after merging
  }

  async function mergeSortHelper(arr, l, r) {
    if (!sortingRef.current) return; // Check if we should stop
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      await mergeSortHelper(arr, l, m);
      if (!sortingRef.current) return; // Check if we should stop
      await mergeSortHelper(arr, m + 1, r);
      if (!sortingRef.current) return; // Check if we should stop
      await merge(arr, l, m, r);
    }
  }

  let arr = [...array];
  await mergeSortHelper(arr, 0, arr.length - 1);

  if (!sortingRef.current) return; // Check if we should stop
  // Final state: all bars sorted
  let sortedColors = {};
  for (let k = 0; k < arr.length; k++) {
    sortedColors[k] = 'green';
  }
  setBarColors(sortedColors);
};
