/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let uniqueS = ''
  const history = []
  let longestLength = 0
  for (const si in s) {
    const char = s[si]
    const index = uniqueS.indexOf(char)
    if (index != -1) {
      history.push(uniqueS)
      const after = uniqueS.length == 1 ? '' : uniqueS.substring(index + 1)
      uniqueS = after
    }
    uniqueS += char
  }
  history.push(uniqueS)
  history.forEach((element) => {
    if (element.length > longestLength) {
      longestLength = element.length
    }
  })
  return longestLength
};