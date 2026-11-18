abstract class Manager {
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
    
    abstract calculatePay() : number;
}

class Employee extends Manager {
    calculatePay(){
        return this._baseSalary + 5000;
    }
}