console.log("authMiddleware.js");

import jwt from "jsonwebtoken";
import config from "../config/envConfig.js";

export function authenticateToken(req, res, next) {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    console.log(token);

    if (!token) {
        console.log(token);
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    jwt.verify(token, config.jwt.secret, (err, decoded) => {
        console.log("One", decoded);
        console.log("Two", err);
        if (err) {
            return res.status(403).json({ error: "Invalid or expired token." });
        }
        req.user = decoded;
        next();
    });
}

export function authorizeRoles(...roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: "Access forbidden: insufficient rights" });
        }
        next();
    };
}
