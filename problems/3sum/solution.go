

func increaseThreeIndex(first, length int) (int, int, int) {
	first++
	return first, (first + 1), length
}

func threeSum(nums []int) [][]int {
	length := len(nums) - 1
	first, second, third := 0, 1, length
	sort.Ints(nums)
	var result = [][]int{}

	for first < third {
		total := nums[first] + nums[second] + nums[third]
		if total == 0 {
			result = append(result, []int{nums[first], nums[second], nums[third]})
			second++
			for second < length && nums[second] == nums[second-1] {
				second++
			}
			if third < length {
				third++
			}
		} else if total > 0 {
			third--
		} else if total < 0 {
			second++
		}
		for first < length && (second >= third || first > 0 && nums[first] == nums[first-1]) {
			first, second, third = increaseThreeIndex(first, length)
		}
	}
	return result
}