/* 
  Params: nums, start, end
    - start and end are indexes
    - start will be 0, and end will be the last idx.
  Steps:
  1. Select the last element to be your pivot value.
  2. The pivot index begins at start.
  3. Loop through nums from start to end.
  4. If the current value is less than or equal to the pivot value,
     swap the current value with the value at the pivot index
     and increment the pivot index.
  5. After the loop, swap the value at pivot index
     with the pivot value at end.
  6. Finally, return the pivot index,
     the index where the left section of smaller values end.
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the last
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to its left and all larger numbers to its right.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} start The index indicating the start of the slice of array
 *    being processed.
 * @param {number} end The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The idx where left section of smaller items ends.
 */
function partition(nums = [], start = 0, end = nums.length - 1) {
  const pivotVal = nums[end];
  let pivotIdx = start;
  for (let i = start; i < end; i++) {
    if (nums[i] <= pivotVal) {
      [nums[i], nums[pivotIdx]] = [nums[pivotIdx], nums[i]];
      pivotIdx++;
    }
  }
  [nums[pivotIdx], nums[end]] = [nums[end], nums[pivotIdx]];
  return pivotIdx;
}

export default partition;
