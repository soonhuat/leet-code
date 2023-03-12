/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const merge = (left, right) => {
    const sortedArray = []
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        sortedArray.push(right.shift())
      } else {
        sortedArray.push(left.shift())
      }
    }
    return [...sortedArray, ...left, ...right]
  }

  const mergeSort = (inputs) => {
    if (inputs.length < 2) {
      return inputs
    }
    const mid = Math.floor(inputs.length / 2)
    const left = inputs.slice(0, mid)
    const right = inputs.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
  }
  return mergeSort(nums)
};