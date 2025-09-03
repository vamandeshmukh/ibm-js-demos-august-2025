// ===================================
// Problem of asynchronous JavaScript 
// ===================================

// // database 
// const getData = () => {
//     setTimeout(() => {
//         return { city: "Bengaluru" };
//     }, 2000);
// };

// const data = getData();
// console.log(data.city);


// ===================================
// Solution 1 - callbacks  
// ===================================

const getData = (arg) => {
    setTimeout(() => {
        arg({ city: "Bengaluru" });
    }, 2000);
};

getData((data) => { console.log(data.city) });
