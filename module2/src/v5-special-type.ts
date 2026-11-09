// top types
let Hello : any = "Hello world";
Hello = 1233;
Hello.length;

// core types
const hi : string = "Hi";
let something : unknown;
something = hi;

// Nullish type
interface User {
    name : string;
}
type logInUser = User | null;

const currentUser : logInUser = null;

// Unit type
const greet = () => {
    console.log("Hello World")
}

Hello = greet()

// Subtype of unit
const anoGreet = () : undefined => {
    console.log("Hello World");
    return undefined;
}

// Bottom type
const getError = (msg : string) : never => {
    throw new Error(msg);
}