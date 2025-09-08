console.log("errorHandler.js");

import { NotFoundError, ValidationError, ConflictError } from "../errors/app.errors.js";

const errorHandler = (err, req, res, next) => {

    console.error("Error Handler:", err);

    if (err instanceof NotFoundError) {
        console.log(err.message);
        return res.status(404).json({ error: err.message });
    }

    if (err instanceof ValidationError) {
        console.log(err.message);
        return res.status(400).json({ error: err.message });
    }

    if (err instanceof ConflictError) {
        console.log(err.message);
        return res.status(409).json({ error: err.message });
    }

    res.status(500).json({ error: "Internal Server Error" });
};

export default errorHandler;

