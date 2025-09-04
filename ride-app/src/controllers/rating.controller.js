console.log("rating.controller.js");

import RatingService from "../services/rating.service.js";

const ratingService = new RatingService();

export async function createRating(req, res) {
    console.log(req.body);
    try {
        const rating = await ratingService.addRating(req.body);
        res.status(201).json(rating);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getRatingById(req, res) {
    console.log(req.params.id);
    try {
        const rating = await ratingService.getRatingById(req.params.id);
        if (!rating) return res.status(404).json({ error: "Rating not found" });
        res.json(rating);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getAllRatings(req, res) {
    console.log(req);
    try {
        const ratings = await ratingService.getAllRatings();
        if (!ratings) return res.status(404).json({ error: "Ratings not found" });
        res.json(ratings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getRatingByIdsByRide(req, res) {
    console.log(req.params.rideId);
    try {
        const ratings = await ratingService.getRatingByIdsByRide(req.params.rideId);
        console.log("ratings", ratings);
        res.json(ratings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



