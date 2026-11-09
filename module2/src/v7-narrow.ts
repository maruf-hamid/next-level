// type guard
const uperValue = (value : string | number) => {
    if (value === "string"){
        return value.toUpperCase();
    }
    return value;
}

// Truthiness
type User = {
    name : string;
    address? : {
        street : string;
    }
} | null ;

const user1 : User = {
    name : "Maruf",
    address : {
        street : "five",
    }
}

const currentUser = (user : User) => {
    if (user && user.address){
        console.log(user.address.street);
        return;
    }
    throw new Error("Address is not given");
}

// Some caveat of Type Guard
const printAll = (x : string | string[] | null) =>{
    if(x && typeof x === "object"){
        for(let str of x){
            console.log(str)
        }
    }else if(typeof x === "string"){
        console.log(x);
    }else{
        console.log("");
    }
}

// in operator
type Bird = {fly: () => void};
type Fish = {swim: () => void};
const move = (animal : Bird | Fish) => {
    if ("fly" in animal){
        animal.fly();
        return;
    }

    animal.swim();
    return;
}

// Discriminated Area
interface Circle {
    kind : "circle";
    radius : number;
}

interface Square {
    kind : "square";
    sideLength : number;
}

const getArea = (area : Circle | Square) => {
    if (area.kind === "circle"){
        console.log(area.radius);
    }else {
        console.log(area.sideLength)
    }
}