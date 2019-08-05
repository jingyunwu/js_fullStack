// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
var reverseList = function(head) {
    // head 头节点
  var cur = head,
    pre = null;
  while (cur) {
    var t = cur.next;
    cur.next = pre;
    pre = cur;
    // cur.next = null;
    cur = t;
  }
  return pre;   
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let a1 = new ListNode(1);
let a2 = new ListNode(2);
a1.next = a2;
let a3 = new ListNode(3);
a2.next = a3;
let a4 = new ListNode(4);
a3.next = a4;
console.log(reverseList(a1));