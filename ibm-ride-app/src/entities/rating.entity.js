// console.log("rating.entity.js");

import mongoose from "../config/mongo.js";

const ratingSchema = new mongoose.Schema({
    rideId: { type: String, required: true },
    userId: { type: String, required: true },
    rating: {
        type: Number, required: true, min: 1, max: 5,
        validate: {
            validator: Number.isInteger,
            message: "Integers only"
        }
    },
    comment: { type: String, trim: true, maxlength: 500 },
}, { timestamps: true });

const RatingModel = mongoose.model("Rating", ratingSchema, "ratings");

// console.log(RatingModel);

export default RatingModel;
