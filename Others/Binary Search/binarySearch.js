// Time O(n)
// Space O(1)

function bs_list(haystack, needle) {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
}

const result = bs_list([1, 2, 3, 4, 5, 6, 7, 8], 6);
console.log(result);
