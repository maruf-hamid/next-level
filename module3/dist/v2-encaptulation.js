// Encaptulation 
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    get baseSalary() {
        return this.salary;
    }
    set newSalary(baseSalary) {
        this.salary = baseSalary;
    }
}
const employee1 = new Employee("Maruf", 50000);
const employee2 = new Employee("Hamid", 50000);
console.log(employee1.baseSalary);
export {};
