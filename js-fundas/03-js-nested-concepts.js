// console.log("03-js-nested-concepts.js");

// const employee = {
//     id: 101, name: "Sonu", address: { city: "Bengaluru", pin: 400454 }
// };

// // const { id, name, address: { city, pin } } = { ...employee };
// const { id: eid, name: ename, address: { city, pin } } = { ...employee };

// // console.log(id); // erro  
// // console.log(address); // error 
// console.log(eid); // 101
// console.log(city); // Bengaluru

// const employee = {
//     id: 101, name: "Sonu", salary: 10.50
// };

// const { id, name, salary, department } = { ...employee };

// console.log(id); 
// console.log(department); // 


// const employee = {
//     id: 101, name: "Sonu", salary: 10.50
// };

// const department = employee.department;
// console.log(employee.department); // 
// console.log(department); // 

// =========================
// truthy falsy values in JS 
// =========================

// const employee = {
//     id: 101, name: "Sonu", salary: 10.50
// };

// employee.salary && employee.salary > 10

let num; // falsy => 0, '', null, undefined, false truthy => any other value  

if (num) { // if num has a value == not undefined 
    console.log("truthy");
}
else {
    console.log("falsy");
}


