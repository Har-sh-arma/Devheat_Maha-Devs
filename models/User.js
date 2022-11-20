//Script containing Schema for student User

const mongoose = require('mongoose');

var crop = new mongoose.Schema({
	name:String,
	soil_config:String,
    plantation_date:String,
    land_area:String
});

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	location:String,
	passHash: String,
	current_crops:[{type:crop}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
