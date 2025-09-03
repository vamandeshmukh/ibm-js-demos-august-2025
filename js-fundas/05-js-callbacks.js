
// Problem of asynchronous JavaScript 

const getData = () => {
    console.log("getData function invoked.");
    return { city: "Bengaluru" };
};

const data = getData();
console.log(data.city);
