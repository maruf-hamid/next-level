class Employee {
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
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describeEarn() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
const employee = new Employee("Maruf", 50000);
console.log(employee.describe());
const manager = new Manager("Hamid", 24000, 20);
console.log(manager.describeWork());
export {};
