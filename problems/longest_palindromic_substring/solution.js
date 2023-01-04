/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let palindrome = ''
  let halfPalindromeLength = 0
  const length = s.length

  const findPalindrome = (left, right) => {
    while (left > -1 && right < length && s[left] == s[right]) {
      left--
      right++
    }
    const substr = s.substring(left + 1, right)
    if (substr.length > palindrome.length) {
      palindrome = substr
      halfPalindromeLength = Math.floor(substr.length / 2)
    }
  }

  for (let i = 0; i < length; i++) {
    if (length - i < halfPalindromeLength) {
      break
    }
    findPalindrome(i, i)
    findPalindrome(i, i + 1)
  }
  return palindrome
};