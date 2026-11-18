class Employee {
    constructor(
        public name : string,
        protected _baseSalary : number,
    ){}

    baseSalary(tax: number) {
        return this._baseSalary - this._baseSalary * tax;
    }
}

class Manager extends Employee {
    override baseSalary() {
        return this._baseSalary + 5000;
    }
}

const manager = new Manager("Maruf", 2000);

console.log(manager.baseSalary())