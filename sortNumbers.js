function solution(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }
  return nums.sort((a, b) => a - b);
}
