const mongoose = require("mongoose");
const {Schema} = mongoose;

const QuoteSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    service: {type: String, required: true},
    phone: {type: String, required: true},
    message: {type: String, required: true}
});
module.exports = mongoose.model("Quote", QuoteSchema);