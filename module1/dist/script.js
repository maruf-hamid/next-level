"use strict";
let add = (a, b) => {
    return a + b;
};
// console.log(add(20, 30));
// array and tuple a random modifier
const arr = ["Maruf", "2100"];
const numArr = [1, 2, 3];
// tuple
const dhaka = [123, 456];
// optional and default parameter in function
const concatName = (firstName, lastName) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
};
concatName("Maruf");
// default
const greetings = (name, greeting = "Hello,") => {
    console.log(greeting + " " + name);
};
greetings("Maruf");
// rest parameter
const sum = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};
sum(1, 2, 3, 4, 5);
const logUserAction = (...args) => {
    const [name, age, isActive] = args;
    console.log(name + " is " + age);
};
logUserAction("Maruf", 23, false);
const user = {
    name: "Maruf",
    age: 23,
    action: () => console.log("Hello"),
    badges: ["red", "white"],
    adress: {
        streetName: "Rahmannagar",
        streetNumber: 12,
    }
};
