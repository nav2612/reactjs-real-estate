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
		<body className='sign-up-page'>
		<div className='login-box'>
			<center>
                <h2>Reset Password</h2>
				<label>Phone Number</label>
				<div id = 'phone-input'>
					<PhoneInput country={'ca'}
					style={{marginBottom:'60px'}}
					onlyCountries={['ca']}
					disableAreaCodes
					disableDropdown
					countryCodeEditable={false}
					value={mynumber} 
					onChange={(e) => {setnumber(e)}}/>
					{/*<div id="recaptcha-container"></div>*/}
					<button id="send-otp">Submit</button>
				</div>
			</center>
		</div>
		</body>
	);
}

export default Login;
