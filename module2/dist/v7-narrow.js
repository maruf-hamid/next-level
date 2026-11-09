// type guard
const uperValue = (value) => {
    if (value === "string") {
        return value.toUpperCase();
    }
    return value;
};
const user1 = {
    name: "Maruf",
    address: {
        street: "five",
    }
};
const currentUser = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("Address is not given");
};
// Some caveat of Type Guard
const printAll = (x) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("");
    }
};
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
    return;
};
const getArea = (area) => {
    if (area.kind === "circle") {
        console.log(area.radius);
    }
    else {
        console.log(area.sideLength);
    }
};
export {};
