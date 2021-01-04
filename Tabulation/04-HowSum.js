// given an array of non-negative numbers and a targetSum, if the targetSum can be obtained
// by summing a combination of numbers of the array, return the combination in a new array
// in case of multiple possible combinations, return any combination. else return null

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++){
        if (table[i] != null)
            for (let num of numbers) {
                table[i + num] = [...table[i]];
                (table[i + num]).push(num);
            }
    }
    return table[targetSum];
};

console.log(howSum(8, [3, 4, 5]));
console.log(howSum(6, [3, 4, 5]));
console.log(howSum(300, [7, 14]));