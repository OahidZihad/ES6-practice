const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(2, 5);
// console.log(part);

const removed = nums.splice(2,5, 7777777);    ///// 7777 k inject kore dilam oi jaygay....
console.log(removed);
console.log(nums);

const together = nums.join(", ");
console.log(together);