// Encaptulation 
class Employee {
    constructor(
        public name : string,
        private salary : number,
    ){}

    get baseSalary() : number {
        return this.salary;
    }

    set newSalary(baseSalary : number) {
        this.salary = baseSalary;
    }
}
const employee1 = new Employee("Maruf", 50000);
const employee2 = new Employee("Hamid", 50000);

console.log(employee1.baseSalary)