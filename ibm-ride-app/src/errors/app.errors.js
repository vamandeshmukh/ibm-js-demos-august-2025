// // console.log("app.errors.js");

export class NotFoundError extends Error {

    constructor(message) {
        super(message, 404);
        this.name = "NotFoundError";
    }
}

export class ValidationError extends Error {
    constructor(message) {
        super(message, 400);
        this.name = "ValidationError";
    }
}

export class ConflictError extends Error {
    constructor(message) {
        super(message, 409);
        this.name = "ConflictError";
    }
}

