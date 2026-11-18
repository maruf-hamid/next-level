class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    baseSalary() {
        return this._baseSalary;
    }
}
class Manager extends Employee {
    baseSalary() {
        return this._baseSalary + 5000;
    }
}
export {};
