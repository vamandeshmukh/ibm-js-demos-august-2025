// console.log("swagger.js");

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import config from "./envConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = config.server.port || 3333;

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "IBM Ride App",
        version: "1.0.0",
        description: "API documentation with Swagger UI",
    },
    servers: [
        {
            url: `http://localhost:${PORT}`,
            description: "Development server",
        },
    ],
};

const options = {
    definition: swaggerDefinition,
    apis: [join(__dirname, "../routes/*.js")],
};

const swaggerSpec = swaggerJSDoc(options);

export function swaggerDocs(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
}

