import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Login = () => {
	// Inputs
	var [mynumber, setnumber] = useState("");

	// Sent OTP
	// const signin = () => {
	// 	mynumber='+'+ mynumber;
		// if (mynumber === "" || mynumber.length < 10) 
        // {alert("Please enter a valid phone number");
        // return;}
		// else{
		// 	alert("Done");
			//return <a href ='/openhouse'/>;
	//}
	//}

	return (
		<div className='login-box'>
			<center>
                <h1>Reset Password</h1>
                <h4>Enter your phone number to send the reset link</h4><br /><br /><br />
				<div id = 'phone-input'>
					<PhoneInput country={'ca'}
					onlyCountries={['ca']}
					disableAreaCodes
					disableDropdown
					countryCodeEditable={false}
					value={mynumber} 
					onChange={(e) => {setnumber(e)}}/><br></br>
                    <br></br><br></br><br></br><br></br>
					{/*<div id="recaptcha-container"></div>*/}
					<button id="send-otp">Submit</button>
				</div>
			</center>
		</div>
	);
}

export default Login;
