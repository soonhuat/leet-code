func findUsedKey(target string, list []string) bool {
	for _, v := range list {
		if v == target {
			return true
		}
	}
	return false
}

func threeSum(nums []int) [][]int {
	length := len(nums)
	sorted := make([]int, length)
	numsMap := make(map[int]int)
	usedMap := make(map[int][]string)
	copy(sorted, nums)
	sort.Ints(sorted)
	var result = [][]int{}

	for k, v := range sorted {
		numsMap[v] = k
	}
	for index := 0; index < length; index++ {
		for inner := index + 1; inner < length; inner++ {
			finding := 0 - sorted[index] - sorted[inner]
			if v, exist := numsMap[finding]; exist && v > inner {
				usedKey := fmt.Sprintf("%s-%s", sorted[inner], finding)
				if usedVal, found := usedMap[sorted[index]]; !found || found && !findUsedKey(usedKey, usedVal) {
					usedMap[sorted[index]] = append(usedMap[sorted[index]], usedKey)
					result = append(result, []int{sorted[index], sorted[inner], finding})
				}
			}
		}
	}
	return result
}