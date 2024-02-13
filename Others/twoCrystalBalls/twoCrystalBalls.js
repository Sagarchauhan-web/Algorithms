// Only Two balls are given to find out at what height the ball breaks

function two_crystal_balls(breaks) {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  console.log(jmpAmount, 'jmpAmountm');

  let i = jmpAmount;

  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmount;

  for (let j = i; j < breaks.length; j++) {
    if (breaks[j]) {
      return j;
    }
  }

  return -1;
}

console.log(
  two_crystal_balls([
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
  ]),
);
