// given an array of words and a target, determine whether the target can be obtained
// by concatenating combination of words of the array

const canConstruct = (target, wordBank, memo = {}) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= target.length; i++){
        if (table[i]) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) == word)
                    table[i + word.length] = true;
            }
        }
    }
    return table[target.length];
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar', 'erd']));
console.log(canConstruct('eeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));