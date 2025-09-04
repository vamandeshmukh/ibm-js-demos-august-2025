console.log("rating.repository.js");

import RatingModel from "../../entities/rating.entity.js";

export default class RatingRepository {

    async create(data) {
        console.log(data);
        const rating = new RatingModel(data);
        const saved = await rating.save();
        return saved.toObject();
    }

    async findById(id) {
        console.log(id);
        const doc = await RatingModel.findById(id).lean();
        return doc || null;
    }

    async findAll() {
        console.log("findAll");
        return await RatingModel.find({}).lean();
    }

    async findByRideId(rideId) {
        console.log(rideId);
        // return { id: 101, name: "Sonu" };
        return await RatingModel.find({ rideId }).lean();
    }


}

