const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AssetsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    title: {
        type: String,
    },
    cost: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Asset = mongoose.model("assets", AssetsSchema);
