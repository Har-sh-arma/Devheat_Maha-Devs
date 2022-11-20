const mongoose = require('mongoose');
const User = require('../models/User');
const asyncWrapper = require('../function_mods/async');
const MongoClient = require('mongodb').MongoClient;


const addData = asyncWrapper(async(req, res)=>{
    const {email ,location, data} = req.body;
    const user = await User.findOne({email});
    const add_crop = JSON.parse(data);
    const current_crops = user.current_crops;
    console.log(data);
    if(add_crop.name!=undefined){
        user.current_crops.push(add_crop);
    }
    console.log(current_crops);

    user.save(function (err) {
        if (err) return handleError(err)
        console.log('Success!');
      });
    User.updateOne({email},{location}, (result,err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
        }
    console.log("updated...");
});
})

const removeCrop = asyncWrapper(async(req, res)=>{
    const {email, crop_name} = req.body;
    const user = await User.findOne({email});
    const current_crops = user.current_crops;
})

module.exports = addData