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

// const getData = (arg) => {
//     setTimeout(() => {
//         arg({ city: "Bengaluru" });
//     }, 2000);
// };

// getData((data) => { console.log(data.city) });

// // ==========================================
// // Solution 2 - .then().catch() with Promise   
// // ==========================================
// // return new Promise((resolve, reject) => { });
// // fun().then(() => {}).catch(() => {});

// const getData = () => {
//     const isDataAvilable = false; // true // false 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDataAvilable)
//                 resolve({ city: "Bengaluru" });
//             else
//                 reject({ message: "Data not available" });
//         }, 2000);
//     });
// }

// getData()
//     .then((response) => { console.log(response.city); })
//     .catch((error) => { console.log(error.message); });



// // =====================================
// // Solution 3 - async await with Promise
// // =====================================

const getData = () => {
    const isDataAvilable = false; // true // false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDataAvilable)
                resolve({ city: "Bengaluru" });
            else
                reject({ message: "Data not available" });
        }, 2000);
    });
}

const consumeData = async () => {
    try {
        const data = await getData();
        console.log(data.city);
        return data;
    }
    catch (error) {
        console.log(error.message);
    }
};

consumeData();
