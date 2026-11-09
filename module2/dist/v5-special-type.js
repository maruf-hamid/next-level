// top types
let Hello = "Hello world";
Hello = 1233;
Hello.length;
// core types
const hi = "Hi";
let something;
something = hi;
const currentUser = null;
// Unit type
const greet = () => {
    console.log("Hello World");
};
Hello = greet();
// Subtype of unit
const anoGreet = () => {
    console.log("Hello World");
    return undefined;
};
// Bottom type
const getError = (msg) => {
    throw new Error(msg);
};
export {};
