console.log("rating.routes.js");

import { Router } from "express";
import { createRating, getRatingById, getAllRatings, getRatingByIdsByRide } from "../controllers/rating.controller.js";

const router = Router();

/**
 * @swagger
 * /api/ratings:
 *   post:
 *     summary: Create a new rating
 *     tags: [Ratings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rideId
 *               - userId
 *               - rating
 *             properties:
 *               rideId:
 *                 type: string
 *                 description: The ID of the ride being rated
 *               userId:
 *                 type: string
 *                 description: The ID of the user giving the rating
 *               rating:
 *                 type: number
 *                 minimum: 1
 *                 maximum: 5
 *                 description: Rating value (1-5)
 *               comment:
 *                 type: string
 *                 description: Optional comment
 *     responses:
 *       201:
 *         description: Rating created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", createRating);

/**
 * @swagger
 * /api/ratings/{id}:
 *   get:
 *     summary: Get a rating by ID
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Rating ID
 *     responses:
 *       200:
 *         description: Rating details
 *       404:
 *         description: Rating not found
 */
router.get("/:id", getRatingById);

/**
 * @swagger
 * /api/ratings:
 *   get:
 *     summary: Get all ratings
 *     tags: [Ratings]
 *     responses:
 *       200:
 *         description: List of all ratings
 */
router.get("/", getAllRatings);

/**
 * @swagger
 * /api/ratings/ride/{rideId}:
 *   get:
 *     summary: Get ratings by ride ID
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: rideId
 *         required: true
 *         schema:
 *           type: string
 *         description: Ride ID
 *     responses:
 *       200:
 *         description: List of ratings for the specified ride
 *       404:
 *         description: No ratings found for this ride
 */
router.get("/ride/:rideId", getRatingByIdsByRide);

export default router;

// console.log("rating.routes.js");

// import { Router } from "express";
// import { createRating, getRatingById, getAllRatings, getRatingByIdsByRide } from "../controllers/rating.controller.js";

// const router = Router();

// /**
//  * @swagger
//  * /api/ratings:
//  *   post:
//  *     summary: Create a new rating
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               rideId:
//  *                 type: string
//  *               userId:
//  *                 type: string
//  *               score:
//  *                 type: number
//  *                 example: 4.5
//  *     responses:
//  *       201:
//  *         description: Rating created successfully
//  */
// router.post("/", createRating);

// /**
//  * @swagger
//  * /api/ratings/{id}:
//  *   get:
//  *     summary: Get rating by ID
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Rating details
//  */
// router.get("/:id", getRatingById);

// /**
//  * @swagger
//  * /api/ratings:
//  *   get:
//  *     summary: Get all ratings
//  *     responses:
//  *       200:
//  *         description: List of ratings
//  */
// router.get("/", getAllRatings);

// /**
//  * @swagger
//  * /api/ratings/ride/{rideId}:
//  *   get:
//  *     summary: Get all ratings for a ride
//  *     parameters:
//  *       - in: path
//  *         name: rideId
//  *         required: true
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Ratings for the ride
//  */
// router.get("/ride/:rideId", getRatingByIdsByRide);

// export default router;


// // console.log("rating.routes.js");

// // import { Router } from "express";
// // import { createRating, getRatingById, getAllRatings, getRatingByIdsByRide } from "../controllers/rating.controller.js";

// // const router = Router();

// // router.post("/", createRating);
// // router.get("/:id", getRatingById);
// // router.get("/", getAllRatings);
// // router.get("/ride/:rideId", getRatingByIdsByRide);

// // export default router;
