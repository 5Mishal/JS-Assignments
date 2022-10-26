var username = "Mishal Fatima";
var age = 19;
var uni = "NED";

// Tests for equality and inequality with strings &
// Tests using the lower case function

console.log(username === "Sarah"); // false
console.log(username !== "hira"); // true
console.log(username === "Mishal Fatima"); // true
console.log(username === "Mishal fatima"); // false
console.log(username.toLowerCase() === "mishal fatima"); // true

// Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to, and less than or equal to
console.log(age === 19); // true
console.log(age === 30); // false
console.log(age > 15); // false
console.log(age < 21); // true
console.log(age >= 19); // true
console.log(age <= 19); // true

// Tests using "and" and "or" operators
console.log(uni === "NED" && age > 17); // true
console.log(uni === "NED" && age > 35); // false
console.log(uni === "NED" || age > 35); // true

// Test whether an item is in a array
// Test whether an item is not in a array
console.log(username.includes("sana")); // false
console.log(username.includes("Mishal Fatima")); // true