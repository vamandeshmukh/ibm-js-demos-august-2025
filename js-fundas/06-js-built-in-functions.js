// console.log("06-js-common-built-in-functions.js");

// // =====================
// // Array functions in JS
// // =====================

// const users = [
//     { id: 101, username: "sonu", password: "sonu@123" },
//     { id: 102, username: "monu", password: "monu@123" },
//     { id: 103, username: "tonu", password: "tonu@123" }
// ];

// // sort
// const sorted = [...users].sort((a, b) => a.username.localeCompare(b.username));
// console.log(sorted);

// // iterate
// users.forEach(u => console.log(u.username));

// // map
// const usernames = users.map(u => u.username);
// console.log(usernames);

// // reduce
// const totalId = users.reduce((sum, u) => sum + u.id, 0);
// console.log(totalId); // 306

// // filter
// const filtered = users.filter(u => u.id > 101);
// console.log(filtered);

// // find first one
// const userOne = users.find(u => u.username === "monu");
// console.log(userOne);

// // ======================
// // Object functions in JS
// // ======================

// const user = { id: 101, username: "sonu", password: "sonu@123" };

// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));

// Object.freeze(user);
// user.id = 201;
// console.log(user.id);


// =========================
// Functtion functions in JS
// =========================

// call 

// // call
// function fun() {
//     console.log(`${this.username}`);
// }

// fun.call(user);

// ==========================
// String functions in JS
// ==========================

const str = "  Hello world!  ";
console.log(str);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.charAt(2));











