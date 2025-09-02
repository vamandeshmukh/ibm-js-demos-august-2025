// // console.log("JavaScript Basics");

// // Array and object in JS
// // array 
// const friends = ["Sonu", "Monu", "Tonu", "Ponu", 10, 10.50, true];
// // console.log(friends);

// // for (friend in friends)
// //     console.log(friend);

// // for (friend of friends) {
// //     console.log(friend);
// // }

// // console.log(friends[2]);
// console.log(friends);
// friends[2] = "Tonuuuuuuu";
// console.log(friends);

// // obejct 
// const employee = {
//     id: 101, name: "Sonu Reddy", salary: 10.50, phones: [9876543210, 6789012345],
//     address: { street: "Bank street", city: "Hyderabad", pin: 500001 }, isIndian: true,
//     printName: () => { console.log(employee.jobTitle); },
//     updateData: (data) => { employee.jobTitle = data },
//     jobTitle: "Sr Manager",
//     sample: class {
//         id;
//         name;
//         salary;
//         constructor() {}
//         getSalary() {}
//     }
// };

// console.log(employee);
// console.log(employee.address.city);
// employee.printName();
// employee.updateData("VP");
// employee.printName();

// function fun () {
//     console.log(this);
// };
// console.log(this);

// fun();

// functions in JS 

// Old JS function 

// function fun() {
//     console.log("fun function invoked.");
// };

// fun();

// New JS function 

// // const fun = () => { console.log("fun function invoked."); };
// const fun = () => console.log("fun function invoked.");
// fun();

// const getGstAmount1 = (amount) => { return amount * 0.18; };
// const getGstAmount2 = (amount) => amount * 0.18;
// const getGstAmount3 = amount => amount * 0.18;

// const addNums = (a, b) => { return a + b };
const addNums = (a, b) => a + b;

let sum1 = addNums();
let sum2 = addNums(10);
let sum3 = addNums(10, 20);
let sum4 = addNums(10, 20, 30);
let sum5 = addNums("abc", "def");
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);

let num;
console.log(num);
console.log(typeof num);

