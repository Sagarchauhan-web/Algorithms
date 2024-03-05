//  Time O(4n) -> O(n) --> every side has 4 options(drop the constants)

/**
 * Represents directional vectors for movement in a 2D grid.
 * Each vector is represented as an array with two elements: [x, y].
 * - x: Horizontal movement (left or right).
 * - y: Vertical movement (up or down).
 *
 * @type {Array<[number, number]>}
 */
const dir = [
  [-1, 0], // Represents movement towards the top (y - 1).
  [1, 0], // Represents movement towards the bottom (y + 1).
  [0, -1], // Represents movement towards the left (x - 1).
  [0, 1], // Represents movement towards the right (x + 1).
];

/**
 * Determines if a path exists from the current position to the end position in a maze.
 *
 * @param {string[]} maze - A 2D array representing the maze. Each element is either a wall or an open path.
 * @param {string} wall - The character representing a wall in the maze.
 * @param {{x: number, y: number}} curr - The current position (coordinates) in the maze.
 * @param {{x: number, y: number}} end - The target position (coordinates) to reach.
 * @param {boolean[][]} seen - A 2D array indicating whether a cell has been visited (true) or not (false).
 * @param {{x: number, y: number}[]} path - An array witch stores the location traveled from the current position to the end position in a maze.
 * @return {boolean} - Returns true if a path exists from the current position to the end position; otherwise, false.
 */
function walk(maze, wall, curr, end, seen, path) {
  // 1. Base Case
  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // reached the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // seen
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }

  // post
  path.pop();
  return false;
}

function solve(maze, wall, start, end) {
  /**
   * Represents a 2D array indicating whether a cell has been visited (true) or not (false).
   *
   * @type {boolean[][]}
   */
  const seen = [];
  /**
   * Represents an array of objects with `x` and `y` properties, indicating coordinates in a 2D grid.
   *
   * @type {{x: number, y: number}[]}
   */
  const path = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);
  return path;
}

const maze = [
  'xxxxxxxxxx x',
  'x        x x',
  'x        x x',
  'x xxxxxxxx x',
  'x          x',
  'x xxxxxxxxxx',
];

/** @type {string} */
const wall = 'x';

/** @type {{x: number, y: number}} */
const start = { x: 10, y: 0 };

/** * @type {{x: number, y: number}} */
const end = { x: 1, y: 5 };

console.log(solve(maze, wall, start, end));
