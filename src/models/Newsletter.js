const mongoose = require("mongoose");

const {Schema} = mongoose;

const NewsletterSchema = new Schema({
    emails: [{type: String, unique: true}]
});

module.exports = mongoose.model("Newsletter", NewsletterSchema);