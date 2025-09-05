console.log("rating.service.js");

import RatingRepository from "../repositories/mongodb/rating.repository.js";

const ratingRepository = new RatingRepository();

export default class RatingService {

    async addRating(data) {
        console.log(data);
        return await ratingRepository.create(data);
    }

    async getRatingById(id) {
        console.log(id);
        return await ratingRepository.findById(id);
    }

    async getAllRatings() {
        console.log("getAllRatings");
        return await ratingRepository.findAll();
    }
    async getRatingByIdsByRide(rideId) {
        console.log(rideId);
        return await ratingRepository.findByRideId(rideId);
    }
}

