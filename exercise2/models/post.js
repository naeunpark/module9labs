const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    title: { type: String, trim: true, required: true },
    description: { type: String },
    user_id: {type: Schema.Types.ObjectId, ref: "users"},
    image: {type: String, trim: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("posts", postSchema);