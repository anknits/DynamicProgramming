// given an array of words and a target, determine in how many ways can the target be obtained
// by concatenating combination of words of the array

const countConstruct = (target, wordBank, memo = {}) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= target.length; i++){
        if (table[i] != 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) == word) {
                    table[i + word.length] += table[i];
                }                    
            }
        }
    }
    return table[target.length];
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('abcdef', ['ab', 'abc', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('eeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));