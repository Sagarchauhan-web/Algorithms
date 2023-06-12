const array = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

// brute Force
const getTrappedWater = function (heights) {
  let totalTrappedWater = 0;

  for (let i = 0; i < heights.length; i++) {
    let LMax = 0;
    let RMax = 0;
    let RIndex = i;
    let LIndex = i;

    while (LIndex > 0) {
      if (heights[LIndex] > LMax) LMax = heights[LIndex];
      LIndex--;
    }

    while (RIndex < heights.length) {
      if (heights[RIndex] > RMax) RMax = heights[RIndex];
      RIndex++;
    }

    totalTrappedWater += Math.min(LMax, RMax) - heights[i];
  }

  return totalTrappedWater;
};

// Optimal
const optimalGetTrappedWater = function (heights) {
  let totalTrappedWater = 0;
  let LIndex = 0;
  let RIndex = heights.length - 1;
  let maxL = 0;
  let maxR = 0;

  while (LIndex < RIndex) {
    if (heights[LIndex] <= heights[RIndex]) {
      if (heights[LIndex] > maxL) {
        maxL = heights[LIndex];
      } else {
        totalTrappedWater += maxL - heights[LIndex];
      }
      LIndex++;
    } else {
      if (heights[RIndex] > maxR) {
        maxR = heights[RIndex];
      } else {
        totalTrappedWater += maxR - heights[RIndex];
      }
      RIndex--;
    }
  }

  return totalTrappedWater;
};

console.log(optimalGetTrappedWater(array));
