console.log("mongo.js");

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.MONGO_DB_NAME,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

connectToDatabase();

export default mongoose;

// console.log("mongo.js");

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// await mongoose.connect(process.env.MONGO_URI, {
//     dbName: process.env.MONGO_DB_NAME,
// });

// mongoose.connection.on('connected', () => {
//     console.log('Mongoose connected to MongoDB');
// });

// export default mongoose;
