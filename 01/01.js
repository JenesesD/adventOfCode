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

function countSlidingWindow(input) {
    let counter = 0;
    
    for (let i = 0; i < input.length - 3; i++) {
        let prev = input[i] + input[i + 1] + input[i + 2];
        let next = input[i + 1] + input[i + 2] + input[i + 3];

        if (prev < next) {
            counter++;
        }
    }

    return counter;
}

console.log(countLargerinput(input));
console.log(countSlidingWindow(input));