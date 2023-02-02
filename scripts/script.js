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
    [ 'lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nurse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
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

const deducitons = [
    [ "Federal Taxes", 0.12, "%" ],
    [ "State Taxes", 0.07, "%"],
    [ "Social Security", 0.062, "%" ],
    [ "Medicare", 0.0145, "%" ],
    [ "State Disability", 0.01, "%" ],
    [ "Retirement Investment", 0.05, "%" ],
    [ "Medical Insurance", 180, "-" ],
]

const careerList = document.getElementById("career-list");

const selectedCareer = document.getElementById("selected-career");
const grossAnnualIncome = document.getElementById("gross-annual-income");
const grossMonthlyIncome = document.getElementById("gross-monthly-income");

const federalTaxes = document.getElementById("federal-taxes");
const stateTaxes = document.getElementById("state-taxes");
const socialSecurity = document.getElementById("social-security");
const medicare = document.getElementById("medicare");
const stateDisability = document.getElementById("state-disability");
const retirementInsurance = document.getElementById("retirement-insurance");
const medicalInsurance = document.getElementById("medical-insurance");

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

 function test(careerName) {
    console.log("clicked anchor")
    selectedCareer.value = careerName

    for(let career of careers) {
        if(career[0] == careerName) {
            let gmi = calculate(career[1], 12, "divide");

            grossAnnualIncome.value = career[1];
            grossMonthlyIncome.value = gmi;

            federalTaxes.value = gmi - calculate(gmi, 0.12, "multiply");
            stateTaxes.value = gmi - calculate(gmi, 0.07, "multiply");
            socialSecurity.value = gmi - calculate(gmi, 0.062, "multiply");
            medicare.value = gmi - calculate(gmi, 0.0145, "multiply");
            stateDisability.value = gmi - calculate(gmi, 0.01, "multiply");
            retirementInsurance.value = gmi - calculate(gmi, 0.05, "multiply");
            medicalInsurance.value = gmi - calculate(gmi, 180, "subtract");
        }
    }
 }

// Listing careers on page
for(let career of careers) {
    console.log(career[0]);
    const listItem = document.createElement("li");
    listItem.innerText = career[0];
    careerList.appendChild(listItem);

    listItem.className = "listItem";
    listItem.id = career[0];

    listItem.addEventListener('click', function() {test(career[0]); }, true);
}