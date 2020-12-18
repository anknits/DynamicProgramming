// given an array of words and a target, determine in how many ways can the target be obtained
// by concatenating combination of words of the array

const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target == '') return 1;
    let totalCount = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) == 0){
            let suffix = target.slice(word.length);
            let remainderCount = countConstruct(suffix, wordBank, memo);
            totalCount += remainderCount;
        }        
    }
    memo[target] = totalCount;
    return totalCount;
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('eeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));