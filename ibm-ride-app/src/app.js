console.log("app.js");

import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
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

app.use(helmet());

const corsOptions = {
  origin: config.frontend.url || "http://localhost:8080",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: config.rateLimit.maxRequests || 100,
  message: {
    error: "Too many requests from this IP, please try again later.",
    retryAfter: 15
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/", apiLimiter);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", userRoutes);
app.use("/api/ratings", ratingRoutes);

swaggerDocs(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.use("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
    method: req.method
  });
});

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(() => {
    console.log("Process terminated");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully");
  server.close(() => {
    console.log("Process terminated");
  });
});

export default app;

// console.log("app.js");

// import express from "express";
// import userRoutes from "./routes/user.routes.js";
// import ratingRoutes from "./routes/rating.routes.js";
// import { swaggerDocs } from "./config/swagger.js";
// import path from "path";
// import { fileURLToPath } from "url";
// import config from "./config/envConfig.js";
// import errorHandler from "./middlewares/errorHandler.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = config.server.port || 3333;

// app.use(express.json());
// app.use("/api/users", userRoutes);
// app.use("/api/ratings", ratingRoutes);
// app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// swaggerDocs(app);

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// // use more methods and args on app object 
// // const app = express();




