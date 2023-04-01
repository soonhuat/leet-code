func twoSum(nums []int, target int) []int {
	numsMap := make(map[int]int)
	for k, v := range nums {
		if result, exist := numsMap[target - v]; exist {
			return []int{k, result}
		}
		numsMap[v] = k
	}
	return []int{}
}