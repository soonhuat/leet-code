/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  // recursive break into unit of 1 and remerge
    const mergeSort = (head) => {
        if (!head || !head.next) {
            return head
        }

        let [prev, slow, fast] = [null, head, head]

        // fast will run in double speed, when reach the end of linkedList, slow is at mid point
        const cutToHalf = () => {
            while (fast && fast.next) {
                prev = slow
                slow = slow.next
                fast = fast.next.next
            }
            // here will cut at the midpoint
            if (prev) {
                prev.next = null
            }
        }
        cutToHalf()
        const firstHalf = mergeSort(head)
        const secondHalf = mergeSort(slow)

        const merge = (first, second) => {
            if (!first) {
                return second
            } else if (!second) {
                return first
            }

            if (first.val < second.val) {
                first.next = merge(first.next, second)
                return first
            } else {
                second.next = merge(first, second.next)
                return second
            }
        }

        const merged = merge(firstHalf, secondHalf)
        return merged
    }
    const result = mergeSort(head)
    return result
};