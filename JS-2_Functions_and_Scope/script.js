let globalVar = "This is a global variable";
let anotherGlobalVar = "This is another global variable";

function demoFunctionScope() {
    let localVar = "This is a localVar, inside a function";
    console.log(globalVar); // the string assigned here can still be printed
    console.log(anotherGlobalVar); // the string assigned here can still be printed
    console.log(localVar);
    console.log(typeof globalVar);
    console.log(typeof anotherGlobalVar);
}

demoFunctionScope(); // calling the function

if (true) {
        let blockVar = "This is a block scoped variable";
        console.log(blockVar); 
}

console.log(localVar); // this produced error in the console because the variable we are calling is not a global variable
console.log(blockVar); // this produced error in the console because the variable we are calling is not a global variable



// Instructions:
/********************
 Step 1: Create Global Variables
 - Create two global variables (e.g., globalVar, anotherGlobalVar).
 - Assign any values you like.
********************/

/********************
 Step 2: Create a Function to Demonstrate Function Scope
 - Define a function (e.g., demoFunctionScope).
 - Inside this function:
   1. Declare a local variable (e.g., localVar).
   2. Log both the global variable(s) and the local variable to the console.
   3. Return a string that includes both the global and local variables.
********************/

/********************
 Step 3: Call the Function and Log Its Return Value
 - Call your function from Step 2 and store its result in a variable.
 - Use console.log() to display the return value in the console.
********************/


/********************
 Step 4: Demonstrate Block Scope
 - Write an if statement that always executes (if (true) { ... }).
 - Inside this block:
   1. Use let to declare a block-scoped variable (e.g., blockVar).
   2. Log the block-scoped variable within the block.
 - Try logging the same variable outside the block and observe what happens.
********************/