const fs = require('fs');
const input = fs.readFileSync("./input02.txt").toString('utf-8').split("\n");

function calculateDirection(input) {
    let directionalValues = {
        "forward": 0,
        "up": 0,
        "down": 0
    }

    for (let i = 0; i < input.length; i++) {
        let direction = input[i].split(" ");
        let key = directionalValues[direction[0]];

        if (key != undefined) {
            key = key + +direction[1];
        }
    }

    return directionalValues["forward"] * (directionalValues["down"] - directionalValues["up"]);
}

console.log(calculateDirection(input));