const mongoose = require("mongoose");
const {Schema} = mongoose;
const User = require("./User");

const AdminSchema = new Schema({
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true, minlength: 6}
});

const Admin = User.discriminator("Admin", AdminSchema);

module.exports = Admin;