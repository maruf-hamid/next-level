class Employee {
    constructor(
        public name : string,
        protected _baseSalary : number,
    ){}

    get baseSalary() : number {
        return this._baseSalary;
    }

    set newSalary(baseSalary : number) {
        this._baseSalary = baseSalary;
    }

    describe() : string {
        return `${this.name} earns ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    
    constructor(name: string,
        _baseSalary : number, 
        public teamMemberCount : number){
            
        super(name, _baseSalary);
    }

    describeWork() : string {
        return `${this.name} manages ${this.teamMemberCount} people`
    }

    describeEarn() : string {
        return `${this.name} earns ${this._baseSalary}`
    }
}

const employee = new Employee("Maruf", 50000);

console.log(employee.describe());

const manager = new Manager("Hamid", 24000, 20);

console.log(manager.describeWork());