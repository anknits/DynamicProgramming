// given an array of words and a target, determine whether the target can be obtained
// by concatenating combination of words of the array

const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target == '') return true;
    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            let suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('eeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));