"use strict";
let userName = "Jahnavi";
let age = 22;
const email = "jahnavi@gmail.com";
const isSubscribed = true;
// Type Inference
let city = "Hyderabad";
let score = 95;
// Update age
age++;
// Template Literal
let message = `Hello ${userName}, you are ${age} years old and your email is ${email}`;
// Operators
let isPremium = age > 18 && isSubscribed;
// Output
console.log(message);
console.log("City:", city);
console.log("Score:", score);
console.log("Premium Eligible:", isPremium);
