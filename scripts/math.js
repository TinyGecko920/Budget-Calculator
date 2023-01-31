const careerData = require("./career-data.js").data;
const deductionsData = require("./deductions.js").data;

console.log(careerData);
console.log(deductionsData);

function multiplyNums(a, b) {
    try {
        if(typeof a === "number" && typeof b === "number") {
            return(a * b);
        } else {
            throw new Error("One or more paramaters passed to function are not numbers.");
        }
    } catch(err) {
        console.log(err);
    }
}

function subtractNums(a, b) {
    try {
        if(typeof a === "number" && typeof b === "number") {
            return(a - b);
        } else {
            throw new Error("One or more paramaters passed to function are not numbers.");
        }
    } catch(err) {
        console.log(err);
    }
}

console.log(multiplyNums(1000, "c"));
console.log("still running");