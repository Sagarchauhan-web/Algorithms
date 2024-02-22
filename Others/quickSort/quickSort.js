//  Time O(nlogn)

/**
 *
 * @param {number[]} arr - Array of numbers to sort
 * @param {number} lo
 * @param {number} hi
 * @returns {void} Returns
 */
function qs(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);
  console.log(arr, pivotIdx);
  console.log(arr, lo, pivotIdx - 1);
  console.log(arr, pivotIdx + 1, hi);
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

/**
 *
 * @param {number[]} arr - Array of numbers to sort
 * @param {number} lo
 * @param {number} hi
 * @returns {number} Returns
 */
function partition(arr, lo, hi) {
  const pivot = arr[hi];

  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

/**
 *
 * @param {number[]} arr - Array of numbers to sort
 * @returns {void}  Returns
 */
function quick_sort(arr) {
  qs(arr, 0, arr.length - 1);
}

const arr = [8, 7, 6, 4, 5];
quick_sort([8, 7, 6, 4, 5]);
