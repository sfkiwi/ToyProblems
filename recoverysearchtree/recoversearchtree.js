/* https://leetcode.com/problems/recover-binary-search-tree/description/ */

/* Fails on
test case: [2, null, 3, 1]
output: [2, null, 3, 1]
expected: [1, null, 3, 2]
*/

/*
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note:
A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
*/


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