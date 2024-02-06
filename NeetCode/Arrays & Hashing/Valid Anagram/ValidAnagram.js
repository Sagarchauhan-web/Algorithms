function Anagram(s, t) {
  if (s.length !== t.length) return false;
  let countT = new Map();
  let countS = new Map();

  for (let i = 0; i < s.length; i++) {
    const sValue = 1 + (countS.has(s[i]) ? countS.get(s[i]) : 0);
    const tValue = 1 + (countT.has(t[i]) ? countT.get(t[i]) : 0);
    countS.set(s[i], sValue);
    countT.set(t[i], tValue);
  }

  for (let i = 0; i < s.length; i++)
    if (countS.get(s[i]) !== countT.get(s[i])) return false;

  return true;
}

console.log(Anagram('ant', 'tan'));
