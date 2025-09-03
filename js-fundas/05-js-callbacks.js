 // ==================================
// Problem of asynchronous JavaScript 
// ==================================

const getData = () => {
    setTimeout(() => {
        return { city: "Bengaluru" };
    }, 2000);
};

const data = getData();
console.log(data.city);

