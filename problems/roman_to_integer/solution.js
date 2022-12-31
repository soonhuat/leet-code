/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const romanMinus = {
        V: 'I',
        X: 'I',
        L: 'X',
        C: 'X',
        D: 'C',
        M: 'C'
    }
  let num = 0

  for (const si in s) {
    const char = s[si]
    num += roman[char]
    let minusIndex = 1
    const index = Number(si)
    while (
      index - minusIndex >= 0 &&
      s[index - minusIndex] === romanMinus[char]
    ) {
      num -= roman[s[index - minusIndex]] * 2
      minusIndex++
    }
  }
  return num
};