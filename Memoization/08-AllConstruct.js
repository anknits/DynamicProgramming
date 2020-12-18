const allConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target == '') return [[]];
    let result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) == 0){
            let suffix = target.slice(word.length);
            let suffixWays = allConstruct(suffix, wordBank);
            let targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }        
    }
    memo[target] = result;
    return result;
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('eeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));