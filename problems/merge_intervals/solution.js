/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function sortFunction(a, b) {
  if (a[0] === b[0]) {
    return 0
  } else {
    return a[0] < b[0] ? -1 : 1
  }
}

const merge = function (intervals) {
  const length = intervals.length
  if (length < 2) {
    return intervals
  }
  intervals = intervals.sort(sortFunction)
  const answer = []
  let merged = intervals[0]

  for (let i = 1; i < length; i++) {
    if (
      (intervals[i][0] <= merged[0] && merged[0] <= intervals[i][1]) ||
      (intervals[i][0] <= merged[1] && merged[1] <= intervals[i][1]) ||
      (intervals[i][0] >= merged[0] && merged[1] >= intervals[i][0]) ||
      (intervals[i][1] >= merged[0] && merged[1] >= intervals[i][1])
    ) {
      const lower = intervals[i][0] >= merged[0] ? merged[0] : intervals[i][0]
      const upper = intervals[i][1] >= merged[1] ? intervals[i][1] : merged[1]
      merged = [lower, upper]
      continue
    }
    answer.push(merged)
    merged = intervals[i]
  }
  answer.push(merged)
  return answer
}