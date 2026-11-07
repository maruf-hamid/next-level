let add = (a : number, b : number) => {
    return a + b;
}

// console.log(add(20, 30));

// array and tuple a random modifier

const arr : string[] = ["Maruf", "2100"];
const numArr : number[] = [1, 2, 3];

// tuple
const dhaka: readonly [number, number] = [123, 456];

// optional and default parameter in function

const concatName = (firstName : string, lastName? : string) => {
    if(!lastName) {
        return firstName;
    }

    return firstName + " " + lastName;
}
concatName("Maruf");

// default
const greetings = (name : string , greeting = "Hello,") => {
    console.log(greeting + " " + name);
}
greetings("Maruf")

// rest parameter
const sum = (...numbers: number[]) => {
    return numbers.reduce((total, sum) => total + sum , 0)
}
sum(1,2,3,4,5);

const logUserAction = 
(...args : [name : string, age : number, isActive : boolean]) =>
{
    const [name, age, isActive] = args;
    console.log(name + " is " + age);
}

logUserAction("Maruf", 23, false);

// object, type alias, interface

type adress = {
    streetName : string;
    streetNumber : number;
}
type TUser = {
    name : string;
    age : number;
    action: () => void;
    badges : string[];
    adress : adress;
}

interface IUser {
    name : string;
    age : number;
    action: () => void;
    badges : string[];
}

const user : TUser = {
    name : "Maruf",
    age : 23,
    action : () => console.log("Hello"),
    badges : ["red", "white"],
    adress: {
        streetName : "Rahmannagar",
        streetNumber : 12,
    }
}