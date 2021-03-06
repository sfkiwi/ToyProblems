/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  
  let inner = function(node) {

    if (node.left) {
      if (node.left.val <= node.val) {
        inner(node.left);
      } else {
        // swap
        let temp = node.left.val;
        node.left.val = node.val;
        node.val = temp;
        inner(root);
      }
    }

    if (node.right) {
      if (node.right.val > node.val) {
        inner(node.right);
      } else {
        // swap
        let temp = node.right.val;
        node.right.val = node.val;
        node.val = temp;
        inner(root);
      }
    }
  }

  inner(root);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(6);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(8);
tree.right.right = new TreeNode(10)

console.dir(tree);

recoverTree(tree);

console.dir(tree);

tree = new TreeNode(2);
tree.left = new TreeNode(3);
tree.right = new TreeNode(1);

console.dir(tree);

recoverTree(tree);

console.dir(tree);