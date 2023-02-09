const careers = [
    // [ Career Name, Average Income ]
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'Computer Technician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Cow', 655 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Blectrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'Lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nurse', 66150 ],
    [ 'Nutritionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PG&E/AT&T Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind Energy Technician', 56700 ]
]

const careerList = document.getElementById("career-list");
const selectedCareer = document.getElementById("career-data");
const grossAnnualIncome = document.getElementById("gai-data");
const grossMonthlyIncome = document.getElementById("gmi-data");
const grossMonthlyForHouse = document.getElementById("gmi-for-house");
const maxHousePayment = document.getElementById("max-house-payment");
const federalTaxes = document.getElementById("federal-tax-data");
const stateTaxes = document.getElementById("state-tax-data");
const socialSecurity = document.getElementById("social-security-data");
const medicare = document.getElementById("medicare-data");
const stateDisability = document.getElementById("state-disability-data");
const retirementInsurance = document.getElementById("retirement-insurance-data");
const medicalInsurance = document.getElementById("medical-insurance-data");
const addRow = document.getElementById("add-row");
const checkbookTableBody = document.getElementById("checkbook-tablebody")

// Calculator (add, subtract, multiply, divide)
function calculate(a, b, operator) {
    try {
        if(typeof(a) === "number" && typeof(b) === "number") {
            try {
                switch(operator) {
                    case "add":
                        return(Math.floor(a + b));
                    case "subtract":
                        return(Math.floor(a - b));
                    case "multiply":
                        return(Math.floor(a * b));
                    case "divide":
                        return(Math.floor(a / b));
                    default:
                        throw new Error("Opperator passed to function is not valid.");
                }
            } catch(err) {
                console.log(err);
            }
        } else {
            throw new Error("One or more paramaters passed to function are not numbers.");
        }
    } catch(err) {
        console.log(err);
    }
 }

 let gmi = 0;

// Calculate deductions and update table data
function updateData(careerName) {
    selectedCareer.innerText = careerName;

    // Mooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
    if(careerName == "Cow") {
        document.body.style.backgroundImage = "url(/images/textures/360_F_354133486_oFYpkrFUNHVJv2PHdy55PxA7NeOjNqN2.jpg)";
        document.body.style.backgroundRepeat = "repeat";
        document.body.style.backfaceVisibility = 0.5;
        let moo = new Audio("sounds/mooing-cow-122255.mp3");
        moo.volume = 1;
        moo.play();
    } else {
        document.body.style.backgroundImage = "";
    }

    for(let career of careers) {
        if(career[0] == careerName) {
            gmi = calculate(career[1], 12, "divide");

            grossAnnualIncome.innerText = `$${career[1].toFixed(2)}`;
            grossMonthlyIncome.innerText = `$${gmi.toFixed(2)}`;
            grossMonthlyForHouse.innerText = `$${gmi.toFixed(2)}`;
            maxHousePayment.innerText = `$${calculate(gmi, 0.33, "multiply").toFixed(2)}`;

            let initialCheckbookAmount = document.getElementById("initial-checkbook-amount")
            initialCheckbookAmount.innerHTML = `$${gmi.toFixed(2)}`

            gmi = calculate(gmi, calculate(gmi, 0.12, "multiply"), "subtract"); federalTaxes.innerText = `$${gmi.toFixed(2)}`;
            gmi = calculate(gmi, calculate(gmi, 0.07, "multiply"), "subtract"); stateTaxes.innerText = `$${gmi.toFixed(2)}`;
            gmi = calculate(gmi, calculate(gmi, 0.062, "multiply"), "subtract"); socialSecurity.innerText = `$${gmi.toFixed(2)}`;
            gmi = calculate(gmi, calculate(gmi, 0.0145, "multiply"), "subtract"); medicare.innerText = `$${gmi.toFixed(2)}`;
            gmi = calculate(gmi, calculate(gmi, 0.01, "multiply"), "subtract"); stateDisability.innerText = `$${gmi.toFixed(2)}`;
            gmi = calculate(gmi, calculate(gmi, 0.05, "multiply"), "subtract"); retirementInsurance.innerText = `$${gmi.toFixed(2)}`;
            gmi = calculate(gmi, 180, "subtract"); medicalInsurance.innerText = `$${gmi.toFixed(2)}`;
        }
    }
 }

 // Listing careers on page
for(let career of careers) {
    const listItem = document.createElement("li");
    listItem.innerText = career[0];
    careerList.appendChild(listItem);
    listItem.className = "listItem";
    listItem.id = career[0];
    listItem.addEventListener('click', function() {
        updateData(career[0]); 
    }, true);
}

// Add rows to checkbook when add row button is pressed
function addRowToCheckbook() {
    let newRow = checkbookTableBody.insertRow(-1);
    for(let i = 0; i < 4; i++) {
        let newCell = newRow.insertCell(-1);
        switch(i) {
            /*
                0 = Transaction Description
                1 = Payment, Fee, Withdrawal (-)
                2 = Deposit Credit (+)
                3 = Balance
            */
            case 0:
                newCell.className = "transaction-description"
                newCell.innerHTML = (`<input class="checkbook-input" type="text" placeholder="Transaction">`);
                break;
            case 1:
                newCell.className = "subtract-money"
                newCell.innerHTML = (`<input class="checkbook-input" type="text" placeholder="$0.00">`);
                newCell.addEventListener('change', function() {
                    
                    console.log("subtract amount")
                }, true)
                break;
            case 2:
                newCell.className = "add-money"
                newCell.innerHTML = (`<input class="checkbook-input" type="text" placeholder="$0.00">`);
                newCell.addEventListener('change', function() {
                    console.log('add amount')
                }, true)
                break;                
            case 3:
                newCell.className = "amount"
                let initialCheckbookAmount = document.getElementById("initial-checkbook-amount")
                initialCheckbookAmount.innerHTML = `$${gmi.toFixed(2)}`

                newCell.innerHTML = "nil"
                // add and subtract previous row values

                break;
            default:
                newCell.innerHTML = (`<input class="checkbook-input" type="text" placeholder="---">`);
        }
    }
}

addRow.addEventListener('click', function() {
    addRowToCheckbook()
}, true);