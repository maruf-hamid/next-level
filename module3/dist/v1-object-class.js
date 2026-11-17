class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee1 = new Employee("Maruf", 60000);
const employee2 = new Employee("Hamid", 50000);
console.log(employee1);
console.log(employee2);
export {};
