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

// const addNums = (a, b) => { return a + b };
// const addNums = (a, b) => a + b;

const getGstAmount1 = (amount) => { return amount * 0.18; };
const getGstAmount2 = (amount) => amount * 0.18;
const getGstAmount3 = amount => amount * 0.18;

