import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const Signup_realtor = () => {
  var [mynumber, setnumber] = useState("");
  const [passw, setPassw] = useState("");
  const [show, setShow] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Sent OTP
  const signin = () => {
    mynumber = "+" + mynumber;
    if (mynumber === "" || mynumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }
    else{
      <Link to='/verify'></Link>
    }
  };

  return (
    <body className="sign-up-page">
    <div className="login-box">
      <center>
        <h1>Welcome to Open House</h1>
        <h2>Sign up</h2>
        <div id="name-field">
          <label>Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        /></div>
        <div id="phone-input" style={{ display: !show ? "block" : "none" }}>
          <label>Phone Number</label>
          <PhoneInput
            country={"ca"}
            onlyCountries={["ca"]}
            disableAreaCodes
            disableDropdown
            countryCodeEditable={false}
            value={mynumber}
            onChange={(e) => {
              setnumber(e);
            }}
            placeholder="Enter phone number"
          />
          <label>Company</label>
            <input
              type="password"
              className="password"
              placeholder="Enter Company's name"
              value={passw}
              onChange={(e) => setPassw(e.target.value)}
            />
          <label>Password</label>
          <div>
            <input
              type="password"
              className="password"
              placeholder="Enter Password"
              value={passw}
              onChange={(e) => setPassw(e.target.value)}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              className="confirm-password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button style={{marginTop:'50px'}} id="send-otp" onClick={signin}>
            Sign Up
          </button>
        </div>
      </center>
    </div>
    </body>
  );
};

export default Signup_realtor;