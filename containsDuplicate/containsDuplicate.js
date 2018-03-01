/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      //check difference
      if (Math.abs(hash[nums[i]] - i) <= k) {
        // difference of indices is at most k
        return true;
      } else {
        // update the index in case further duplicates
        hash[nums[i]] = i;
      }
      //return true if abs difference less than k
    } else {
      // store index of element
      hash[nums[i]] = i;
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([7, 5, 3, 5, 1, 8, 7, 6], 2)); // true
console.log(containsNearbyDuplicate([7, 5, 7, 7, 1, 8, 7, 6], 1)); // true
console.log(containsNearbyDuplicate([7, 5, 5, 5, 1, 8, 7, 6], 1)); // true
console.log(containsNearbyDuplicate([7, 5, 3, 2, 1, 8, 4, 7], 7)); // true X
console.log(containsNearbyDuplicate([7, 7], 1)); // true X
console.log(containsNearbyDuplicate([7, 5, 3, 6, 1, 8, 9, 2], 2)); // false
console.log(containsNearbyDuplicate([7, 5, 5, 4, 1, 8, 7, 6], 0)); // false
console.log(containsNearbyDuplicate([], 0)); // false
console.log(containsNearbyDuplicate([7], 1)); // false


