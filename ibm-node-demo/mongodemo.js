console.log("mongodemo.js");

import mongoose from 'mongoose';

export const dbcon = () => {

    const Employee = mongoose.model("Employee", { name: String, phone: String, email: String, });

    mongoose.connect('mongodb://localhost:27017/ibm-demo')
        .then(() => Employee.find())
        .then(employees => console.log(employees))
        .catch(error => console.error(error))
        .finally(() => mongoose.connection.close());
};


// export const dbcon = async () => {

//     const Employee = mongoose.model("Employee", { name: String, phone: String, email: String, });

//     try {
//         await mongoose.connect('mongodb://localhost:27017/ibm-demo');
//         const employees = await Employee.find();
//         console.log(employees);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         await mongoose.connection.close();
//     }
// };

