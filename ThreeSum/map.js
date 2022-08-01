function threeSumMap(sum, nums) {
  if (nums.length < 2) return;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let theOther = sum - nums[i];
    let flag = map.get(theOther);
    if (flag != null) return [nums[i], theOther];
    map.set(nums[i], i);
  }
}
module.exports = threeSumMap;
