grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']

// grid[0].sort();
// console.log(grid);
console.log(grid.length);

// function sortAlpha(word) {
// 	return word.split("")
// 			.sort()
// 			.join("");
// }

// let randomWord = "sdfjwefic";
// console.log(grid[1]);
// console.log(sortAlpha(grid[1]))
// grid[1] = sortAlpha(grid[1]);

// console.log(grid[1]);
for (let i = 0; i < grid.length; i++)
{  console.log(grid[i]);
    var temp = grid[i].split("").sort().join("");
    
    grid[i] =  temp;
    console.log(grid[i]);
}
console.log(grid);
// 

console.log('a'<'b');
function gridChallenge(grid) {
    // Write your code here
    // sort string of each row alphabetically
    
    for (let i = 0; i < grid.length; i++)
    {
        var temp = grid[i].split("").sort().join("");
        grid[i] =  temp;
    }
    for (let i = 0; i < grid.length; i++)
    {
        
        for (let j =0; j <grid.length-1; j++ ){
            if (grid[j][i] > grid[j+1][i]){
                return 'NO';
            }
        }
        
    }
    return 'YES'
    // 

}

console.log(gridChallenge(grid));