/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let number1 = ''
  let number2 = ''
  while (l1 && l1.val != undefined) {
    number1 = l1.val + number1
    l1 = l1.next
  }
  while (l2 && l2.val != undefined) {
    number2 = l2.val + number2
    l2 = l2.next
  }
  const answer = BigInt(number1) + BigInt(number2)
  const strAnswer = answer.toString()
  let reverse = strAnswer.split('')
  reverse = reverse.reverse()
  const result = new ListNode(0)
  let trackingNode = result
  for (const str of reverse) {
    const node = new ListNode(str)
    trackingNode.next = node
    trackingNode = trackingNode.next
  }
  return result.next
};