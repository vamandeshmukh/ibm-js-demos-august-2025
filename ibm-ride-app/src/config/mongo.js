// console.log("mongo.js");

import mongoose from "mongoose";
import config from "./envConfig.js";

async function connectToDatabase() {
    try {
        await mongoose.connect(config.mongo.uri, {
            dbName: config.mongo.dbName,
        });
        // console.log("Connected to MongoDB:", config.mongo.dbName);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
}

connectToDatabase();

export default mongoose;


