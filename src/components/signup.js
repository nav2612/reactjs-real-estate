import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
  };

  return (
    <div className="login-box">
      <center>
        <h1>Welcome !!</h1>
        <input
          type="text"
          className="first-name"
          placeholder="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="last-name"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <div id="phone-input" style={{ display: !show ? "block" : "none" }}>
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
          <br></br>
          <div>
            <input
              type="password"
              className="password"
              placeholder="Enter Password"
              value={passw}
              onChange={(e) => setPassw(e.target.value)}
            />

            <input
              type="password"
              className="confirm-password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button id="send-otp" onClick={signin}>
            Sign Up
          </button>
        </div>
      </center>
    </div>
  );
};

export default Signup_realtor;