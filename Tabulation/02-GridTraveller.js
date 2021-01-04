// find the number of ways to reach from start (left-top) to end (bottom-right) in a m*n grid
// when you are only allowed to move right and down

const grid = (m, n) => {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;    
    for (let i = 0; i < m + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if (j + 1 <= n) table[i][j + 1] += table[i][j];
            if (i + 1 <= m) table[i + 1][j] += table[i][j];
        }
    }
    return table[m][n];
};

console.log(grid(12, 9));

// const table = Array(m+1).fill(() => Array(n+1).fill(0)); shouldn't be used
// Since array is an object (passed by reference), 
// all elements of the outer array will point to the same array