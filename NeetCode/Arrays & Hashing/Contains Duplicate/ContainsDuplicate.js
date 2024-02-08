const containsDuplicate = (nums) => {
  const numsHashset = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numsHashset.has(nums[i])) {
      return true;
    }
    numsHashset.set(nums[i], true);
  }
  return false;
};

console.log(containsDuplicate([2, 3, 4, 1]));
