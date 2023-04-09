/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	answer := &ListNode{Val: 0, Next: nil}
	currAnswer := answer
	for true {
		if l1 != nil {
			currAnswer.Val += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			currAnswer.Val += l2.Val
			l2 = l2.Next
		}
		if currAnswer.Val > 9 {
			currAnswer.Val -= 10
			currAnswer.Next = &ListNode{Val: 1, Next: nil}
		} else if l1 != nil || l2 != nil {
			currAnswer.Next = &ListNode{Val: 0, Next: nil}
		} else {
			break
		}
		currAnswer = currAnswer.Next
	}
	return answer
}