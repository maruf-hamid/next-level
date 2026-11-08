// type alias 
type Role = "admin" | "member";

interface User {
    id : number;
    role : Role;
}

const user1 : User = {
    id : 124,
    role : "admin",
}

// interface
interface Animal {
    species : string;
}

interface Cat extends Animal {
    breed : string;
}

const cat : Cat = {
    breed : "persian",
    species : "abc",
}

// type er extends = intersection
type Vehicle = {
    model : string;
}
type Car = Vehicle &{
    brand : string;
}

const car : Car = {
    model : "Corolla",
    brand : "Toyota",
}