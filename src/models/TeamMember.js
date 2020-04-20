const mongoose = require("mongoose");

const {Schema} = mongoose;

const TeamMemberSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    avatar: {type: String},
    description: {type: String, required: true},
    role: {type: String, required: true}
});

module.exports = mongoose.model("TeamMember", TeamMemberSchema);