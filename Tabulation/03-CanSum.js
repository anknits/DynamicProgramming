// given an array of non-negative numbers and a targetSum, determine whether the targetSum can be obtained
// by summing a combination of numbers of the array

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i]) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[targetSum];
};

console.log(canSum(8, [3, 4, 5]));
console.log(canSum(6, [3, 4, 5]));
console.log(canSum(300, [7, 14]));