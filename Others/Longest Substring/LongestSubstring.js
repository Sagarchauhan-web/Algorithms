const word = 'abcdbae';

// my method at start
const findSubString = (word) => {
  let hightestSubstringLength = 0;
  let theString = [];

  for (let i = 0; i < word.length; i++) {
    const wordsArray = [word[i]];

    for (let j = i + 1; j < word.length; j++) {
      if (wordsArray.includes(word[j])) {
        break;
      } else {
        wordsArray.push(word[j]);
      }
    }

    if (wordsArray.length > hightestSubstringLength) {
      hightestSubstringLength = wordsArray.length;
      theString = wordsArray;
    }
  }

  return { hightestSubstringLength, theString };
};

// Map method for solving this problem
const findSubStringMap = (word) => {
  let hightestSubstringLength = 0;
  let theString = new Map();

  for (let i = 0; i < word.length; i++) {
    theString.set(word[i], true);

    for (let j = i + 1; j < word.length; j++) {
      if (theString.has(word[j])) {
        break;
      } else {
        theString.set(word[j], true);
      }
    }

    if (theString.size > hightestSubstringLength) {
      hightestSubstringLength = theString.size;
      theString.clear();
    }
  }

  return hightestSubstringLength;
};

// optimised solution
// abcdbae
const lengthOfLongestSubString = function (s) {
  if (s.length <= 1) return s.length;

  const seen = {};
  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previoslySeenChar = seen[currentChar];

    if (previoslySeenChar >= left) {
      left = previoslySeenChar + 1;
    }

    seen[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

console.log(lengthOfLongestSubString(word));
