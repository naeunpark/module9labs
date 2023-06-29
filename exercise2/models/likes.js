const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: "users", required: true},
    post_id: {type: Schema.Types.ObjectId, ref: "posts", required: true},
    like: {type: Boolean, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("likes", likeSchema);