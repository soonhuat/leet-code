/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let length = 0
    let linkedList = head
    while (linkedList) {
        linkedList = linkedList.next
        length++
    }

    function toBst(start, end) {
        if (start > end) {
            return null
        }
        const mid = Math.ceil(start + (end - start) / 2)
        const node = new TreeNode()
        node.left = toBst(start, mid - 1)
        node.val = linkedList.val
        linkedList = linkedList.next
        node.right = toBst(mid + 1, end)

        return node
    }
    linkedList = head
    const node = toBst(1, length)
    return node
};