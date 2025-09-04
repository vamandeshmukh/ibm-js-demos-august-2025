console.log("app.js");

import express from "express";
import userRoutes from "./routes/user.routes.js";
import ratingRoutes from "./routes/rating.routes.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/ratings", ratingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
