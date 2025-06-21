function solution(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }
  return nums.sort((a, b) => a - b);
}

// OR

function solution(nums) {
  return nums !== null
    ? nums.sort(function (a, b) {
        return a - b;
      })
    : [];
}
