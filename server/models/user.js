const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    nickname: { type: String },
    email: { type: String, required: true,unique:true },
    sub: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model("Book", userSchema);

module.exports = User;
