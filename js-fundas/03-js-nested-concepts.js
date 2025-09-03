// console.log("03-js-nested-concepts.js");

const employee = {
    id: 101, name: "Sonu", address: { city: "Bengaluru", pin: 400454 }
};

// const { id, name, address: { city, pin } } = { ...employee };
const { id: eid, name: ename, address: { city, pin } } = { ...employee };

// console.log(id); // erro  
// console.log(address); // error 
console.log(eid); // 101
console.log(city); // Bengaluru
