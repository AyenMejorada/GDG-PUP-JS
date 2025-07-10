console.log("For Loop Output");
for (let i = 1; i < 11; i++) {
    console.log("Number: " + i);
}

console.log(""); // for space
console.log("While Loop Output");
let hobbies = [
    "Traveling",
    "Reading", 
    "Coding", 
    "Drawing", 
    "Playing ML", 
    "Playing the piano", 
    "Cleaning", 
    "Jogging", 
    "Watching Movie", 
    "Sprinting", 
    "Cycling", 
    "Studying", 
    "Exploring"];
let index = 0;
while (index < hobbies.length) { // has "(i+1) to not output the 0 (we started at 0)"
    console.log("Hobby " + (i+1) + ": " + hobbies[i]);
    index++;
}