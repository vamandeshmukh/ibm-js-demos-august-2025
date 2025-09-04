// OOP in JS 
// ES 6 - classes 

// const employee = { id: 101, name: "Sonu" };

class Person {
    // 
}
class Employee extends Person {

    // id;
    // name;
    // salary;
    department;

    // constructor() { }

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    work = () => { console.log(`Employee ${this.name} is working...`); };

    writeCode() { }

}


const emp = new Employee(101, "Sonu", 10.50);

console.log(emp.id, emp.name, emp.salary);
emp.work();