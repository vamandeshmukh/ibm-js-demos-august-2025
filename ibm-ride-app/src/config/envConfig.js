// console.log("envConfig.js");

import dotenv from "dotenv";

dotenv.config();

export default {
    server: {
        port: process.env.PORT || 5000,
    },
    frontend: {
        url: process.env.FRONTEND_URL || "http://localhost:8080"
    },
    rateLimit: {
        maxRequests: parseInt(process.env.RATE_LIMIT_MAX) || 100,
        windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    },
    mysql: {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "test_db",
    },
    mongo: {
        uri: process.env.MONGO_URI || "mongodb://localhost:27017",
        dbName: process.env.MONGO_DB_NAME || "test_db",
    },
    jwt: {
        secret: process.env.JWT_SECRET || "defaultsecret",
    },
};
