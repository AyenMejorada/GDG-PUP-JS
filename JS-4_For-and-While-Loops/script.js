console.log("For Loop Output");
for (let i = 1; i < 11; i++) {
    console.log("Number: " + i);
}

console.log(""); // for space
console.log("While Loop Output");
let hobbies = ["Traveling", "Reading", "Coding", "Drawing", "Playing ML", "Playing the piano", "Cleaning", "Jogging", "Watching Movie", "Sprinting", "Cycling", "Studying", "Exploring"]; // exceeding to more than 10 to check if the loop will really go up to 10 hobbies
let i = 0;
while (i < 10) { // has "(i+1) to not output the 0 (we started at 0)"
    console.log("Hobby " + (i+1) + ": " + hobbies[i]);
    i++
}