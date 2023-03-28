func relativeSortArray(arr1 []int, arr2 []int) []int {
	swapIndex := 0
	arr1Length := len(arr1)
	for _, value2 := range arr2 {
		for i := swapIndex; i < arr1Length; i++ {
			if value2 == arr1[i] {
				arr1[swapIndex], arr1[i] = arr1[i], arr1[swapIndex]
				swapIndex++
			}
		}
	}
	sort.Ints(arr1[swapIndex:])
	return arr1
}