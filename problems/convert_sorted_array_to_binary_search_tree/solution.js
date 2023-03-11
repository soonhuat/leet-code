/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function toBst(values, start, end) {
        if (start > end) {
            return null
        }
        const mid = Math.ceil(start + (end - start) / 2)
        const midValue = values[mid]
        const root = new TreeNode(midValue)
        root.left = toBst(values, start, mid - 1)
        root.right = toBst(values, mid + 1, end)

        return root
    }
    const root = toBst(nums, 0, nums.length - 1)
    return root
};