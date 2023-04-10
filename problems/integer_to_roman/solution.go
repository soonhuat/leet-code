func getRoman(num int, position int) string {
	unit := "I"
	five := "V"
	ten := "X"
	switch position {
	case 3:
		unit = "M"
		break
	case 2:
		unit = "C"
		five = "D"
		ten = "M"
		break
	case 1:
		unit = "X"
		five = "L"
		ten = "C"
		break
	}
	if num == 4 {
		return unit + five
	}
	if num == 9 {
		return unit + ten
	}
	result := ""
	if num >= 5 {
		result += five
		num -= 5
	}
	for i := 0; i < num; i++ {
		result += unit
	}
	return result
}

func getPosition(num int, modulus int) (int, int) {
	return num / modulus, num % modulus
}

func intToRoman(num int) string {
	answer := ""
	position := 3
	run := 0
	for position != -1 {
		run, num = getPosition(num, int(math.Pow10(position)))
		if run > 0 {
			answer += getRoman(run, position)
		}
		position--
	}
	return answer
}
