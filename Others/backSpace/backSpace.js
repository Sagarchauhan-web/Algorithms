// brute force method
const buildString = (string) => {
  const finalString = [];

  for (let p = 0; p < string.length; p++) {
    if (string[p] !== '#') finalString.push(string[p]);
    else finalString.pop();
  }

  return finalString;
};

const compareString = (S, T) => {
  const firstString = buildString(S);
  const secondString = buildString(T);

  if (firstString.length !== secondString.length) {
    return false;
  } else {
    for (let p = 0; p < firstString.length; p++) {
      if (firstString[p] !== secondString[p]) return false;
    }
  }

  return true;
};

// Optimal Way
const compareStrings = (S, T) => {
  let p1 = S.length - 1;
  let p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === '#' || T[p2] === '#') {
      if (S[p1] === '#') {
        let backspace = 2;

        while (backspace > 0) {
          p1--;
          backspace--;
          if (S[p1] === '#') {
            backspace += 2;
          }
        }
      } else if (T[p2] === '#') {
        let backspace = 2;

        while (backspace > 0) {
          p2--;
          backspace--;
          if (T[p2] === '#') {
            backspace += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) return false;

      p1--;
      p2--;
    }
  }

  return true;
};

console.log(compareStrings('ag##d', 'ab##d'));
