// // OOP in JS 
// // ES 6 - classes 

// // const employee = { id: 101, name: "Sonu" };

// class Person {
//     // 
//     department;
// }
// class Employee extends Person {

//     // id;
//     // name;
//     // salary;
//     department;

//     // constructor() { }

//     constructor(id, name, salary) {
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//     }

//     work = () => { console.log(`Employee ${this.name} is working...`); };

//     printData = () => { console.log(this.department); };


// }


// const emp = new Employee(101, "Sonu", 10.50);

// console.log(emp.id, emp.name, emp.salary);
// emp.work();

class Person {

}

class Employee extends Person {

    id;
    name;
    salary;
    department;
    _income;
    #bonus;

    constructor(id, name, salary) {
        super();
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // recommended for memory efficiency 
    workNormal() {
        console.log(`${this.name} works in ${this.department}.`);
    };

    // has some advantage 
    workArrow = () => {
        console.log(`${this.name} works in ${this.department}.`);
    };

    static companyPolicy() {
        console.log(`${this.abc} Monday to Friday working...`);
    };
}

const employee = new Employee(101, "Sonu", 10.50);
employee.department = "HR";
console.log(employee);
employee.workArrow();
employee.workNormal();
// setTimeout(employee.workNormal, 2000);
// setTimeout(employee.workArrow, 2000);
Employee.companyPolicy();
// employee.companyPolicy();

