/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {

  let combos = {};

  let findPairs = function (n, arr) {
    for (let i = n + 1; i < arr.length; i++) {
      if (Math.abs(arr[n] - arr[i]) == k) {
        if (!(combos[`${arr[n]}${arr[i]}`] || combos[`${arr[i]}${arr[n]}`])) {
          combos[`${arr[n]}${arr[i]}`] = [arr[n], arr[i]];  
        }
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    findPairs(i, nums)
  }

  return Object.keys(combos).length;
}

// console.log(findPairs([1, 2, 3, 4, 5], 1));
// console.log(findPairs([3, 1, 4, 1, 5], 2));
// console.log(findPairs([1, 3, 1, 5, 4], 0));
console.log(findPairs([1, 1, 1, 2, 1], 1));
