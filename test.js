const nums = [9, 15, 4, 9];
const k = 18;

const gg  = function(nums, k) {
  return nums.some((el) => (nums.indexOf(k - el) !== -1) && nums.indexOf(k - el) !== nums.lastIndexOf(k - el));
}


console.log(gg(nums, k))