const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");
const secretKey = "eoubouYBiycenauocbaonpicne";
const { generateOTP } = require("../utils/otp");
const { sendSMS } = require("../utils/sms");
const { validationResult } = require("express-validator");

// SIGN UP API creating new users
exports.signUp = (req, res) => {
  const {
    firstName,
    lastName,
    companyName,
    phoneNumber,
    password,
    confirmPassword,
  } = req.body;

  // Validate request
  if (
    !firstName ||
    !lastName ||
    !companyName ||
    !phoneNumber ||
    !password ||
    !confirmPassword
  ) {
    res.status(500).send({
      status: false,
      message: "Fields can not be empty!",
    });
  } else {
    // Save entry in user cred table
    const user_cred = new Users({ ...req.body });

    user_cred
      .save()
      .then((user) => {
        return res.status(200).send({
          status: true,
          message: "User registered successfully!",
          data: user_cred,
        });
      })
      .catch((err) => {
        if (err.code === 11000 && err.keyPattern.phoneNumber) {
          return res.status(400).send({
            status: false,
            message: "Phone number already exists in the database",
          });
        } else {
          return res.status(400).send({
            status: false,
            message: err.message,
          });
        }
      });
  }
};

// Login API with username AS phone number and matching password from Database
exports.login = (req, res) => {
  const { phoneNumber, password } = req.body;

  Users.findOne({ phoneNumber })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          status: false,
          message: "User not found",
        });
      }

      if (user.password !== password) {
        return res.status(401).send({
          status: false,
          message: "Invalid password",
        });
      }

      // Generate and send JWT token
      const token = jwt.sign(
        { id: user._id, companyName: user.companyName },
        secretKey,
        { expiresIn: "2h" }
      );
      return res.status(200).send({
        status: true,
        message: "Login successful",
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          companyName: user.companyName,
        },
        token,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        status: false,
        message: err.message,
      });
    });
};

// API for Generating random 6 digits OTP 
exports.generateOtp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { phoneNumber } = req.body;
  try {
    const user = await Users.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    // Generate OTP and save it to the user's document in the database
    const otp = generateOTP();
    user.otp = otp;
    await user.save();

    // Send OTP to user's phone number
    const message = `Your OTP for resetting the password is ${otp}`;
    sendSMS(phoneNumber, message);

    return res.status(200).json({
      status: true,
      message: "OTP sent to the user",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// API To verrify OTP 
exports.verifyOtp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { phoneNumber, otp } = req.body;
  try {
    const user = await Users.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        status: false,
        message: "Invalid OTP",
      });
    }

    // OTP verified successfully, reset the OTP in the user's document
    user.otp = "";
    await user.save();

    return res.status(200).json({
      status: true,
      message: "OTP verified successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

exports.resetPassword = async (req, res) => {
  const id = req.params.id;
  const { password, confirmPassword } = req.body;

  const user = await Users.findById(id);
  console.log(user.password, "user.password");

  if (password != confirmPassword) {
    return res.status(400).send({
      status: false,
      message: "Password and confirm password do not match",
    });
  }

  if (password === user.password) {
    return res.status(400).send({
      status: false,
      message: "New Password is same as prevoius !",
    });
  }

  Users.findByIdAndUpdate(
    id,
    {
      $set: {
        password: password,
        confirmPassword: confirmPassword,
      },
    },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          status: false,
          message: `User not found with id ${id}`,
        });
      }
      return res.status(200).send({
        status: true,
        message: "Password updated successfully!",
        data: user,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        status: false,
        message: err.message,
      });
    });
};
