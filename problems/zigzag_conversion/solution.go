func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}

	index, runeIndex, divide, midPoint, length := 0, 0, 0, numRows-1, len(s)
	var modulus = midPoint * 2
	var runes = []rune(s)
	result := make([]rune, length, length)

	for runeIndex != length {
		nextIndex := divide*modulus + index
		if nextIndex >= length {
			divide = 0
			index++
			nextIndex = divide*modulus + index
		}
		result[runeIndex] = runes[nextIndex]
		runeIndex++
		if nextIndex%midPoint != 0 && nextIndex+modulus-2*index < length {
			result[runeIndex] = runes[nextIndex+modulus-2*index]
			runeIndex++
		}
		divide++
	}

	return string(result)
}