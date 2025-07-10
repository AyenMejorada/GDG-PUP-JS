// Step 1: Create a car object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

// Step 2: Create a function to describe the car
console.log("Using my method of printing output (can be seen in code):");
function getDescription() {
    console.log("This car is a " + car.year + " " + car.make + " " + car.model);
}

// Step 3: Call the function and display the result
getDescription();
console.log("");
console.log("Using modern JavaScript method of printing output (can be seen in code):")
console.log(`This car is a ${car.year} ${car.make} ${car.model}`);