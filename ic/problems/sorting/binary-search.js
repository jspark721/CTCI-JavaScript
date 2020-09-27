function binarySearchRecursive(array, target) {
  if (array.length === 0) return false;

  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor(left + right / 2);

  if (array[mid] === target) {
    return true;
  } else if (target < array[mid]) {
    return binarySearchRecursive(array.slice(0, mid - 1), target);
  } else {
    return binarySearchRecursive(array.slice(mid + 1), target);
  }
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5], 4));
console.log(binarySearchRecursive([3, 10, 21, 33, 40], 50));

//no slicing
function search(nums, target) {
  function findTarget(nums, target, start, end) {
    if (start > end) return false;

    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      return true;
    } else if (target < nums[mid]) {
      return findTarget(nums, target, start, mid - 1);
    } else {
      return findTarget(nums, target, mid + 1, end);
    }
  }
  return findTarget(nums, target, 0, nums.length - 1);
}

console.log(search([10, 20, 30, 40, 50, 100], 100));

function binarySearch(array, target) {
  if (array.length === 0) return -1;

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === array[mid]) {
      return true;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
