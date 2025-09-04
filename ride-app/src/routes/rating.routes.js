console.log("rating.routes.js");

import { Router } from "express";
import { createRating, getRatingById, getAllRatings, getRatingByIdsByRide } from "../controllers/rating.controller.js";

const router = Router();

router.post("/", createRating);
router.get("/:id", getRatingById);
router.get("/", getAllRatings);
router.get("/ride/:rideId", getRatingByIdsByRide);

export default router;
