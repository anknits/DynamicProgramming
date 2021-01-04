// given an array of non-negative numbers and a targetSum, if the targetSum can be obtained
// by summing a combination of numbers of the array, return the smallest such combination in a new array
// else return null

const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++){
        if (table[i] != null)
            for (let num of numbers) {
                let combination = [...table[i]];
                combination.push(num);
                if (table[i + num] == null || combination.length <= table[i + num].length)
                    table[i + num] = [...combination];
            }
    }
    return table[targetSum];
};

console.log(bestSum(7, [3, 4, 8]));
console.log(bestSum(8, [3, 4, 8]));
console.log(bestSum(300, [7, 14]));