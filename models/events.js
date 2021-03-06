const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
        unique: true,
    },
    eventCode: {
        type: String,
        required: true,
        unique: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
    eventImage: {
        type: String,
        default: "/assets/images.jpg"
    },
    access: {
        type: String,
        default: "Public"
    },
    owner: {
        type: "ObjectId",
        required: true,
        ref: "User",
    },
    expireAt: {
        type: Date,
        required: true
    }
});

eventSchema.index({ expireAt: 1 }, { expireAfterSeconds : 0 });
module.exports = mongoose.model("Events", eventSchema);