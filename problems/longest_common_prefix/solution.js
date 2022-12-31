/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = ''
  let shouldStop = false
  const min = Math.min(
    ...strs.map(function (str) {
      return str.length
    })
  )
  for (let i = 0; i < min; i++) {
    if (shouldStop) {
      break
    }
    for (const str of strs) {
      if (prefix.length != i + 1) {
        prefix += str[i]
        continue
      }
      if (prefix[i] != str[i]) {
        prefix = prefix.substring(0, prefix.length - 1)
        shouldStop = true
        break
      }
    }
  }
  console.log(prefix)
  return prefix
};