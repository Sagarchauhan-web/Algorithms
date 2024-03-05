// brute force method

const getWaterContainerMaxArea = (heights) => {
  let maxArea = 0;
  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;

      if (area > maxArea) {
        maxArea = area;
      }
    }
  }

  return maxArea;
};

// const result = getWaterContainerMaxArea([7, 1, 2, 3, 9]);
// console.log('result: ', result);

// Optimal method
const getWaterContainerMaxAreaOptimal = (heights) => {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    let height = Math.min(heights[p1], heights[p2]);
    let width = p2 - p1;
    let area = height * width;

    if (area > maxArea) maxArea = area;

    if (p1 <= p2) p1++;
    else p2--;
  }

  return maxArea;
};

const resultOptimal = getWaterContainerMaxAreaOptimal([10, 1, 28, 3, 9]);
console.log('result: ', resultOptimal);
