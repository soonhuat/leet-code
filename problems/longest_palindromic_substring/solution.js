/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let wyw = ''
  const repeatChar = {}

  const pushToDict = (char, index) => {
    if (repeatChar[char]) {
      repeatChar[char].push(index)
    } else {
      repeatChar[char] = [index]
    }
  }

  const reverseString = (str) => {
    return str.split('').reverse().join('')
  }

  const length = s.length
  if (length == 1) {
    return s
  }

  for (const i in s) {
    const char = s[i]
    if (repeatChar[char]) {
      continue
    }
    let index = s.indexOf(char, ~~i + 1)
    if (index != -1) {
      pushToDict(char, i)
      pushToDict(char, index)
      while (index < length) {
        const nextIndex = s.indexOf(char, index + 1)
        if (nextIndex != -1) {
          pushToDict(char, nextIndex)
          index = nextIndex
        } else {
          index = length + 1
        }
      }
    }
  }

  for (const key in repeatChar) {
    const charset = repeatChar[key]
    if (charset.length > 1) {
      for (const index in charset) {
        const start = Number(index)
        if (wyw.length > charset[charset.length - 1] - charset[index]) {
          break
        }
        for (let j = charset.length - 1; j > start; j--) {
          const substr = s.substring(charset[index], charset[j] + 1)
          const reversed = reverseString(substr)
          if (substr == reversed && substr.length > wyw.length) {
            wyw = substr
          }

          if (wyw.length > charset[j] - charset[index]) {
            break
          }
        }
      }
    }
  }
  return wyw || s[0]
};