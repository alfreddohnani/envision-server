const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = { discriminatorKey: "role" };

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        avatar: {
            type: String,
        },
        joinDate: {
            type: Date,
            default: Date.now,
        },
        lastLogin: {
            type: Date,
        },
    },
    options
);

module.exports = mongoose.model("User", UserSchema);
