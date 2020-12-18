// given an array of non-negative numbers and a targetSum, if the targetSum can be obtained
// by summing a combination of numbers of the array, return the smallest such combination in a new array
// else return null

const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum < 0) return null;
    if (targetSum == 0) return [];
    let combination = null;
    for (let num of numbers) {
        let remainder = targetSum - num;
        let remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination != null) {
            memo[targetSum] = [...remainderCombination, num];
            if (combination == null || combination.length > memo[targetSum].length)
                combination = memo[targetSum];
        }
    }
    memo[targetSum] = combination;
    return combination;
};

console.log(bestSum(7, [3, 4, 8]));
console.log(bestSum(300, [7, 14]));