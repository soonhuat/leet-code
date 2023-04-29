func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	var center, output float64 = float64(len(nums1)+len(nums2)) / 2, 0
	index1, index2, mid2, val, mid := 0, 0, 0, 0, 0
	if len(nums1) == 0 {
		index1 = 9999
	}
	if len(nums2) == 0 {
		index2 = 9999
	}
	if math.Floor(center) == center {
		mid2 = int(center)
		mid = mid2 - 1
	} else {
		mid = int(math.Floor(center))
		mid2 = 0
	}
	for index := 0; index <= mid+1; index++ {
		index1, index2, val = pointerMove(nums1, nums2, index1, index2)
		if index == mid {
			output += float64(val)
			if mid2 != 0 {
				index1, index2, val = pointerMove(nums1, nums2, index1, index2)
				output = (output + float64(val)) / 2
			}
			break
		}
	}
	return output
}

func pointerMove(nums1 []int, nums2 []int, index1 int, index2 int) (int, int, int) {
	var value = 0
	if index1 == 9999 || (index1 != 9999 && index2 != 9999 && nums2[index2] <= nums1[index1]) {
		value = nums2[index2]
		index2++
		if index2 == len(nums2) {
			index2 = 9999
		}
	} else {
		value = nums1[index1]
		index1++
		if index1 == len(nums1) {
			index1 = 9999
		}
	}
	return index1, index2, value
}