console.log("script.js");

// import { addNums, subNums } from "./calc.js";
// const sum = addNums(10, 20);
// console.log(sum);
// console.log(subNums(10, 5));


import { calc } from "./calc.js";
const sum = calc.addNums(10, 20);
console.log(sum);
console.log(calc.subNums(10, 5));