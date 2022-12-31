/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const max = 2147483647
  const min = -2147483648
  s = s.trim()
  let parsed = ''
  let isNan = false
  for (let char of s) {
    const isSign = char == '-' || char == '+'
    isNan = isNaN(char) && !isSign
    if (isNan || (parsed.length != 0 && (char == ' ' || isSign))) {
      break
    }
    char = char.trim()
    parsed += char
    if (parsed.length >= 10) {
      const asNum = BigInt(parsed)
      if (asNum > max) {
        return max
      }
      if (asNum < min) {
        return min
      }
    }
  }
  let result = 0
  try {
    result = Number(parsed.trim())
  } catch (e) {}
  return isNaN(result) ? 0 : result
};