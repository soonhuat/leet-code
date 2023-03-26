func sortArrayByParity(nums []int) []int {
	nextSortIndex := 0
	for index := range nums {
		if nums[index]%2 == 0 {
			nums[nextSortIndex], nums[index] = nums[index], nums[nextSortIndex]
			nextSortIndex++
		}
	}
	return nums
}