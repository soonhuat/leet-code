/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxWater = 0
  const length = height.length
  const size = length - 1
  const copy = height.slice()
  const heighest1 = Math.max(...copy)
  const index1 = copy.indexOf(heighest1)
  copy.splice(index1, 1)
  const heighest2 = Math.max(...copy)
  let index2 = copy.indexOf(heighest2)
  const lowerSide = Math.min(heighest1, heighest2)
  if (index2 > index1) {
    index2++
    maxWater = (index2 - index1) * lowerSide
  } else {
    maxWater = (index1 - index2) * lowerSide
  }

  for (let i = 0; i < length; i++) {
    const leftHeight = height[i]
    if (maxWater > leftHeight * (size - i)) {
      continue
    }
    for (let j = size; j > i; j--) {
      if (maxWater > leftHeight * (j - i)) {
        break
      }
      const lowerSide = Math.min(leftHeight, height[j])
      const water = lowerSide * (j - i)
      if (water > maxWater) {
        maxWater = water
      }
    }
  }
  return maxWater || 0
};