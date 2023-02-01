const deducitons = [
    [ "Federal Taxes", 0.12, "%" ],
    [ "State Taxes", 0.07, "%"],
    [ "Social Security", 0.062, "%" ],
    [ "Medicare", 0.0145, "%" ],
    [ "State Disability", 0.01, "%" ],
    [ "Retirement Investment", 0.05, "%" ]
    [ "Medical Insurance", 180, "-" ],
]

function multiplyNums(a, b) {
    try {
        if(typeof a === "number" && typeof b === "number") {
            return(a * b);
        } else {
            throw new Error(`One or more paramaters passed to function are not numbers, ${a, b}`);
        }
    } catch(err) {
        console.log(err);
    }
}

function divideNums(a, b) {
    try {
        if(typeof a === "number" && typeof b === "number") {
            alert(a / b)
            return(a / b);
        } else {
            throw new Error(`One or more paramaters passed to function are not numbers, ${a, b}`);
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
            throw new Error(`One or more paramaters passed to function are not numbers, ${a, b}`);
        }
    } catch(err) {
        console.log(err);
    }
}

for(let deduction of deducitons) {
    try {
        if(deduction[2] === "%" && typeof deduction[1] === "number") {
            console.log(multiplyNums(10000, deduction[1]))
        } else if(deduction[2] === "-" && typeof deduction[1] === "number") {
            console.log(subtractNums(10000, deduction[1]))
        } else {
            throw new Error("Test")
        }
    } catch(err) {
        console.log(err)
    }
    console.log(deduction[1])
}


console.log(multiplyNums(1000, "c"));
console.log("still running");