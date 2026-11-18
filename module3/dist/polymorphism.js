class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    baseSalary(tax) {
        return this._baseSalary - this._baseSalary * tax;
    }
}
class Manager extends Employee {
    baseSalary() {
        return this._baseSalary + 5000;
    }
}
const manager = new Manager("Maruf", 2000);
console.log(manager.baseSalary());
export {};
