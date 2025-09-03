// // console.log("02-js-concepts.js");

// -----------------------------
// Block scope and immutability
// -----------------------------

// const fun = () => {

//     let num1 = 10;

//     if (true) {
//         var num2 = 20; // function scope
//         let num3 = 30; // block scope
//         const num4 = 40; // block scope
//     }
//     console.log(num1); // 10
//     console.log(num2); // 20
//     // console.log(num3); // ?
//     // console.log(num4); // ?
// };

// fun();

// let num1 = 10;

// const fun = () => {
//     console.log(num1);
// };

// fun();
// console.log(num1);


// let // mutable
// const // immutable

// let str = "hello";
// console.log(str);
// str = "world";
// console.log(str);

// // let num = 10;
// // num = 20;

// let str = "hello";
// console.log(str);
// str[0] = "H"; // ??
// console.log(str);

// const emp = { id: 101, firstName: "Sonu", salary: 10.50, firstName: "Monu" };
// console.log(emp);


// -----------------------------
// 2. Rest and Spread Operators  ...
// -----------------------------

// const addNums = (...args) => { // rest parameters (varargs in java)
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
// };

// // console.log(addNums([10]));
// // console.log(addNums([10, 20]));
// // console.log(addNums([10, 20, 30]));
// // console.log(addNums([10, 20, 30, 40]));

// console.log(addNums(10));
// console.log(addNums(10, 20));
// console.log(addNums(10, 20, 30));
// console.log(addNums(10, 20, 30, 40));

// const arr1 = [10, 20, 30];
// const arr2 = arr1;
// arr1[2] = 35;
// arr2[1] = 25;

// console.log(arr1);
// console.log(arr2);

// const arr1 = [10, 20, 30];
// const arr2 = [...arr1];
// arr1[2] = 35;
// arr2[1] = 25;

// console.log(arr1);
// console.log(arr2);

// -----------------------------
// Array destructuring
// -----------------------------

// const arr1 = [10, 20, 30];
// const [a, b, c] = arr1;
// console.log(a, b, c);

// const arr1 = [10, 20, 30];
// const [a, b] = arr1;
// console.log(a, b);

// const arr1 = [10, 20, 30];
// const [a, b, c, d] = arr1;
// console.log(a, b, c, d);

// const arr1 = [10, 20, 30];
// const [a, b, c, d] = [...arr1, 40];
// console.log(a, b, c, d);

// const arr1 = [10, 20, 30];
// const [a, b, c, d] = [arr1, 40];
// console.log(a, b, c, d);

// const arr1 = [10, 20, 30, [40, 50, 60]];
// const [a, b, c, [d, e, f]] = arr1;
// console.log(a, b, c, d, e, f);

// const arr1 = [10, 20, 30];
// const [a, , c] = arr1;
// console.log(a, c);

// const getMarks = () => { return [98, 95, 99, 97, 96] };
// const [Maths, Physics, Chemistry, English, Sanskrit] = getMarks();
// console.log(Maths);
// Maths = 100;
// console.log(Maths);

// -----------------------------
// Object destructuring
// -----------------------------



// const employee = { id: 101, name: "Sonu", salary: 10.50 };
// // const idValue = employee.id;
// // console.log(idValue);
// // const { id: eid, name: ename, salary: esal } = employee;
// const { id, name, salary } = employee;
// console.log(id, name, salary);

// const employee = { id: 101, name: "Sonu", salary: 10.50 };
// const { id, ...empData } = employee;
// console.log(id, empData);

// const employee = { id: 101, name: "Sonu", salary: 10.50 };
// const { id, ...empData } = { ...employee, location: "Bengaluru" };
// console.log(empData);

// const marks = [98, 95, 96, 99, 97];
// const [a, b, c, d, e] = marks;
// console.log(a, b, c, d, e);

// //// 1. Pedict the outout
// const marks = [98, 95, 96, 99, 97];
// const [a, b, c, d, e] = [...marks];
// console.log(a, b, c, d, e);
// //// 2. Pedict the outout
// const marks2 = [98, 95, 96, 99, 97];
// const [...myMarks] = [...marks2];
// marks2[0] = 100;
// console.log(myMarks);
// //// 3. Pedict the outout
// const employee = { id: 101, name: "Sonu", salary: 10.50 };
// const { ...empData } = { ...employee };
// employee.id = 102;
// console.log(empData);
// //// 4. Pedict the outout
// const employee2 = { id: 101, name: "Sonu", salary: 10.50 };
// const { empData2 } = { employee2 }; // const {id, name, salary} = employee2;
// employee2.id = 102;
// console.log(empData2);



