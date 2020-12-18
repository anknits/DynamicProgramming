// given an array of non-negative numbers and a targetSum, determine whether the targetSum can be obtained
// by summing a combination of numbers of the array

const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum < 0) return false;
    if (targetSum == 0) return true;
    for (let num of numbers) {
        let remainder = targetSum - num;
        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};

console.log(canSum(8, [3, 4, 5]));
console.log(canSum(300, [7, 14]));