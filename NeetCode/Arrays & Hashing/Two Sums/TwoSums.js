//  Time O(n)
//  Space O(n)

// https://leetcode.com/problems/two-sum/description/

function twoSum(nums, target) {
  const checkingHashValue = new Map();

  for (let i = 0; i < nums.length; i++) {
    const valueToCheck = target - nums[i];
    if (checkingHashValue.has(valueToCheck)) {
      return [checkingHashValue.get(valueToCheck), i];
    }

    checkingHashValue.set(nums[i], i);
    target;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
