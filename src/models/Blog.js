const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: {type: Schema.Types.ObjectId, required: true, ref: "Admin"},
    image: { type: String },
    content: { type: String, required: true },
    createdAt: {type: Date, default: Date.now()},
    lastUpdated: {type: Date}
});

module.exports = mongoose.model("Blog", BlogSchema);
