func reverse(x int) int {
	if x > 0 && x < 10 || x < 0 && x > -10 {
		return x
	}
	val := strconv.Itoa(x)
	prefix := ""
	if x < 0 {
		prefix = "-"
		val = val[1:]
	}
	runes := []rune(val)
	length := len(val) - 1
	mid := (length + 1) / 2

	for i := 0; i < mid; i++ {
		runes[i], runes[length-i] = runes[length-i], runes[i]
	}
	result, _ := strconv.Atoi(prefix + string(runes))
	if result > 2147483647 || result < -2147483647 {
		return 0
	}

	return result
}