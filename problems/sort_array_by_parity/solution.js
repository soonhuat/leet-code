/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const result = []
    let curr = 0
    while (curr < nums.length) {
        if (nums[curr] % 2 === 0) {
            const pop = nums.splice(curr, 1)
            result.push(pop[0])
            curr--
        }
        curr++
    }
    return [...result, ...nums]
};