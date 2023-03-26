
func getPalindrome(input string, left int16, right int16, length int16, answer *string) {
    for left >= 0 && right < length {
        if input[left] != input[right] {
            break
        }
        left--
        right++
    }
    if input[left+1] == input[right-1] {
        current := input[left+1 : right]
        if len(current) > len(*answer) {
            *answer = current
        }
    }
}

func longestPalindrome(s string) string {
    var index int16 = 0
	length := int16(len(s))
	if length == 1 {
		return s
	}
	var answer string = ""
	for index < length-1 {
		getPalindrome(s, index, index, length, &answer)
		getPalindrome(s, index, index+1, length, &answer)
		index++
	}
	return answer
}