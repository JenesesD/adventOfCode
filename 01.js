const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString('utf-8').split("\n").map(s => +s);

function countLargerinput(input) {
    let counter = 0;

    for (let i = 0; i < input.length - 1; i++) {
        const temp = input[i];
        if (temp < input[i + 1]) {
            counter++;
        }   
    }

    return counter;
}

console.log(countLargerinput(input));
//console.log(countLargerinput([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]));