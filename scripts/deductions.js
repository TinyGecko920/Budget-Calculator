/*
    const deductionsData = require("./deductions.js").data;

    [ Deduction Title, Default Amount, Deduction Type]

    Deduction Types =
    "%" - Deduct a percentage from gross income, (amount in decimal form)
    "-" - Subtract a certain amount from gross income
*/

const data = [
    [ "Federal Taxes", 0.12, "%" ],
    [ "State Taxes", 0.07, "%"],
    [ "Social Security", 0.062, "%" ],
    [ "Medicare", 0.0145, "%" ],
    [ "State Disability", 0.01, "%" ],
    [ "Retirement Investment", 0.05, "%" ]
    [ "Medical Insurance", 180, "-" ],
]

export { data }