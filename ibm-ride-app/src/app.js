console.log("app.js");

import express from "express";
import userRoutes from "./routes/user.routes.js";
import ratingRoutes from "./routes/rating.routes.js";
import { swaggerDocs } from "./config/swagger.js";
import path from "path";
import { fileURLToPath } from "url";
import config from "./config/envConfig.js";
import errorHandler from "./middlewares/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = config.server.port || 3333;

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/ratings", ratingRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

swaggerDocs(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// use more methods and args on app object 
// const app = express();



