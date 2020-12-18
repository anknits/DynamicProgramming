// find the number of ways to reach from start (left-top) to end (bottom-right) in a m*n grid
// when you are only allowed to move right and down

const grid = (m, n, memo = {}) => {
    let key = m + ',' + n;
    if (key in memo) return memo(key);
    if (m <= 0 || n <= 0) return 0;
    if (m == 1 || n == 1) return 1;
    memo[key] = grid(m - 1, n) + grid(m, n - 1);
    return memo[key];
};

console.log(grid(12, 9));