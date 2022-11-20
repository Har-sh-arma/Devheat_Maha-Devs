const mongoose = require('mongoose');
const User = require('../models/User');
const asyncWrapper = require('../function_mods/async');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const auth = asyncWrapper(async(req, res) => {
    const {email, textPass} = req.body;
    const user = await User.findOne({email});
    const passHash = user.passHash;
    if(bcrypt.compare(textPass, passHash)){
        res.status(200).send("User authorized");
    }
})

module.exports = auth;
