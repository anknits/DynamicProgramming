// given an array of non-negative numbers and a targetSum, if the targetSum can be obtained
// by summing a combination of numbers of the array, return the combination in a new array
// in case of multiple possible combinations, return any combination. else return null

const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum < 0) return null;
    if (targetSum == 0) return [];
    for (let num of numbers) {
        let remainder = targetSum - num;
        let remainderCombination = howSum(remainder, numbers, memo);
        if (remainderCombination != null) {
            memo[targetSum] = [...remainderCombination, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};

console.log(howSum(8, [3, 4, 5]));
console.log(howSum(300, [7, 14]));