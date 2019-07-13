//       1
// null      2
//         3
// 中序遍历  一棵树  递归的概念
        //  root
    // left      right
//  left1    right1
//  左子树  根节点  右子树

//           1
//     2           3
//  4     5     6     7

function treeNode(val) {
  this.val = val;
  this.left = this.right = null;
}     

let a1 = new treeNode(1);
let a2 = new treeNode(2);
let a3 = new treeNode(3);

a1.right = a2;
a2.left = a3;

var inorderTraversal = function(root) {
  let arr = [];
  const inorder = root => {
    if (root === null) return null;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return arr;
}

console.log(inorderTraversal(a1));