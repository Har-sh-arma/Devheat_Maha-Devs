const router = require('express').Router();
const {userGetOtp, userVerifyOtp} = require('../action/signup.js')
const auth = require('../action/auth.js');
const addData = require('../action/AddUserData');

router.post('/',userGetOtp);
router.post('/verify', userVerifyOtp);
router.post('/login', auth);
router.post('/addData', addData);

module.exports= router;
