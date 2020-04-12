const mongoose = require("mongoose");
const { User } = require("./models");

const createStore = () => {
    let MONGO_URI = "";
    if (process.env.NODE_ENV === "production") {
        MONGO_URI = process.env.MONGODB_URI;
    } else {
        MONGO_URI = "mongodb://localhost/envision";
    }

    const db = mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("DB Connected"))
        .catch((err) => console.error(err));

    return {
        db,
        User
    };


};

module.exports = { createStore };
