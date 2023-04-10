const express = require('express');
const users = require('../controllers/userControlles');
const router = express.Router();

router.post('/signup',users.signUp);
router.post('/login',users.login);
router.post('/verifyotp',users.verifyOtp);
router.post('/resetpassword/:id',users.resetPassword);
router.post('/generateotp',users.generateOtp);


module.exports = router;