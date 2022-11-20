//Script have secure Signup
const { get_OTP, send_mail}= require('../action/email_verification');
const mongoose = require('mongoose');
const User = require('../models/User');
const OTP = require('../models/OTP');
const asyncWrapper = require('../function_mods/async');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userGetOtp = asyncWrapper( async( req, res, next) =>{
	console.log(req.body);
	const {name, email, textPass} = req.body;
	var repeated_mail = await User.findOne({email});
	if(repeated_mail){
		res.status(409);
		res.send("Already Signed Up");
		console.log("repeated mail");
	}
	else if(name != ""){	
		try{
			const passHash = await bcrypt.hash(textPass, saltRounds);
			const otp = get_OTP().toString();
			send_mail(email, otp);
			const otp_hash = await bcrypt.hash( otp, saltRounds);
			await OTP.create({otp_hash, email, name, passHash});
			res.status(200).send(`${email} has been sent an otp.`);
			console.log(`${email} was sent ${otp}`);
		}catch(err){
			res.status(500).send("An error occurred trying to send a mail.");
			console.log(err);
		}
	}
	else{
		res.send("");
		console.log("empty req");
	}

});

const userVerifyOtp = asyncWrapper( async(req, res, next)=>{
	const {otp, email} = req.body;
	if(otp==""){
		res.send("empty");
		return;
	}
	var OtpUser = await OTP.findOne({email});
	if(OtpUser){
		const verified = await bcrypt.compare(otp, OtpUser.otp_hash);
		if(verified){
			const name = OtpUser.name;
			const passHash = OtpUser.passHash;
			console.log(`Valid OTP: ${email} verified`);
			await User.create({name, email, passHash});
			res.status(201).send(`Successfully registered ${email}`);
			await OTP.deleteOne({email});
		}
		else{
			res.send("Invalid OTP");
		}
	}
	else{
		res.send('invalid Request')
	}
})



module.exports = {'userGetOtp': userGetOtp, 'userVerifyOtp': userVerifyOtp};
