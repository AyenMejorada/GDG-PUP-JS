/**
 * JavaScript Variables: let, const, and var
 * 
 * 1. let:
 *    - Used to declare variables that can be reassigned later.
 *    - Block-scoped: The variable exists only within the block where it's declared.
 *    - Preferred for variables whose values may change during program execution.
 *    - Example: let count = 5; count = 10; // Valid
 * 
 * 2. const:
 *    - Used to declare variables whose values cannot be reassigned.
 *    - Block-scoped like `let`.
 *    - Must be initialized at the time of declaration.
 *    - Preferred for constants or variables that should not change.
 *    - Example: const pi = 3.14159; pi = 4; // Error
 * 
 * 3. var:
 *    - Used to declare variables with function scope.
 *    - Hoisted to the top of its scope, but its value remains `undefined` until assigned.
 *    - Not block-scoped, which can cause unexpected behaviors.
 *    - Its usage is generally discouraged in modern JavaScript due to better alternatives (`let` and `const`).
 *    - Example: var name = "John"; name = "Doe"; // Valid
 */
 
// Using let
let name = "Ayen Mejorada";
let age = 17;
let isStudent = true;
let hobbies = ["watching documentaries", "filming", "exercising"];

// Checking types and values
// typeof means what data type is the variable, like here, the data type of name as coded above is a string, so it would print the word "string" in the Console
// console.log is like printf in C language, they are printing the output
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof hobbies); // "object", it is like an array in C

// Using const
const pi = 3.14159;
const birthYear = 2006;
const isEmployed = true;
const favoriteMovies = ["Diary of a Wimpy Kid", "Interstellar", "Inside Out"];

// Checking types and values
console.log(typeof pi); // "number"
console.log(typeof birthYear); // "number"
console.log(typeof isEmployed); // "boolean"
console.log(typeof favoriteMovies); // "object"

// Using var
var city = "Muntinlupa City";
var temperature = "31.2";
var hasPets = true;
var colors = ["Pink", "Purple", "Blue"];

// Checkong types and values
console.log(typeof city); // "string"
console.log(typeof temperature); // "number"
console.log(typeof hasPets); // "boolean"
console.log(typeof colors); // "object"