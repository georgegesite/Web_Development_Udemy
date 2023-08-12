'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'closedPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

function closedPaths(number) {
    var numText = number.toString();
    var numSize = numText.length;
    var numSum = 0;
    
    for (var i = 0; i < numSize; i++) {
        let char = numText[i];
        
        switch (char) {
            case '4':
            case '6':
            case '9':
            case '0':
                numSum += 1;
                break;
            case '8':
                numSum += 2;
                break;
            default:
                break;
        }
    }
    
    console.log(numSum);
    return numSum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const number = 649578;

    const result = closedPaths(number);

    ws.write(result + '\n');

    ws.end();
}
