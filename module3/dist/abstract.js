class Manager {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set newSalary(baseSalary) {
        this._baseSalary = baseSalary;
    }
}
class Employee extends Manager {
    calculatePay() {
        return this._baseSalary + 5000;
    }
}
export {};
