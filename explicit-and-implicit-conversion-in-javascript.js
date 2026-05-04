/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Bug 1: Implicit conversion can be used, but it's better to use explicit conversion
let result = ("5") - 2;
console.log("The result is: " + result);

//Bug 2: Boolean("false") is TRUE because any non-empty string is considered truthy in JavaScript. To fix this, we can use explicit conversion to check if the string is equal to "false".
let isValidString = "false";
let isValid = (isValidString === "false");
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is not valid!");
}
//This will now execute correctly because we are explicitly checking if the string is equal to "false" instead of relying on the truthiness of the string.

//Bug3: The + operator is used for string concatenation when one of the operands is a string. To fix this, we can use explicit conversion to convert the string to a number before performing the addition.
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);
//Output 30 (instead of 255)


// --- Part 2: Custom Examples ---

// 1. Implicit Conversion with an Edge Case (null)
let score = 100;
let penalty = null;
let finalScore = score + penalty; 

console.log("Implicit Conversion:");
console.log("Before: 100 + null");
console.log("After:", finalScore); // Result: 100 (null is coerced to 0)

// 2. Explicit Conversion with an Edge Case (NaN)
let input = "Version 2.0";
let convertedInput = Number(input);

console.log("\nExplicit Conversion:");
console.log("Attempting to convert '" + input + "' to a Number...");
console.log("Result:", convertedInput); // Result: NaN (Not a Number)