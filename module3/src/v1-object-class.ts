class Employee {
    name : string;
    baseSalary : number;

    constructor(name : string, baseSalary : number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}

const employee1 = new Employee("Maruf", 60000);
const employee2 = new Employee("Hamid", 50000);

console.log(employee1);
console.log(employee2);