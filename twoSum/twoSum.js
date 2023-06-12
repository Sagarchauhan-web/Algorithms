// In N2 Time complexity

const twoSumFunction = (nums, target) => {
  for (let p = 0; p < nums.length; p++) {
    const numberToFind = target - nums[p];
    for (let j = p + 1; j < nums.length; j++) {
      if (nums[j] === numberToFind) {
        return [p, j];
      }
    }
  }

  return null;
};

const nums = [2, 3, 9, 1, 6];
console.log(twoSumFunction(nums, 11));

// In N Time complexity And N space Complexity
const twoSumUsingHashMapFunction = (nums, target) => {
  const newMap = {};

  for (let p = 0; p < nums.length; p++) {
    const valueInMap = newMap[nums[p]];

    if (valueInMap >= 0) {
      return [valueInMap, p];
    } else {
      const numberTopFind = target - nums[p];
      newMap[numberTopFind] = p;
    }
  }

  return null;
};

console.log(twoSumUsingHashMapFunction(nums, 11));
